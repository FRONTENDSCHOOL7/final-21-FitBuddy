import React, { useEffect, useState } from 'react';
import NavBottom from '../../components/Common/Nav/NavBottom';
import NavTopBasic from '../../components/Common/Nav/NavTopBasic';
import PostProfile from '../../components/Post/PostProfile';
import ChipsHome from '../../components/Chips/ChipsHome';
import { CommunityButton, CommunityHome } from './StyledCommunity';
import { useNavigate } from 'react-router-dom';
import { getPosts } from '../../api/postApi';
import { useRecoilState } from 'recoil';
import { postsState } from '../../Recoil/communityAtom';

export default function Community(props) {
  const [posts, setPosts] = useRecoilState(postsState);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const fetchPosts = () => {
    getPosts()
      .then((data) => {
        if (data && Array.isArray(data.posts)) {
          setPosts(data.posts);
        } else {
          console.error('에러:', data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(fetchPosts, []);

  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/feedWrite');
  };
  const extractTitleFromContent = (content) => {
    if (content === undefined) return null; // 또는 적절한 기본값
    const titlePattern = /title: '(.*?)'/;
    const match = content.match(titlePattern);
    return match ? match[1] : null;
  };
  const extractContentFromPost = (postContent) => {
    if (postContent === undefined) return null; // 또는 적절한 기본값
    const contentPattern = /content: (.*?)(\n|,|$)/;
    const match = postContent.match(contentPattern);
    return match ? match[1] : null;
  };
  const extractCategoryFromContent = (content) => {
    if (content === undefined) return null;
    const categoryPattern = /category: (\w+)/;
    const match = content.match(categoryPattern);
    return match ? match[1] : null;
  };
  const onCategoryChange = (newCategory) => {
    const internalCategory = newCategory === '전체' ? 'all' : newCategory;
    setSelectedCategory(internalCategory);
  };

  const renderFilteredPosts = () => {
    return posts
      .filter((item) => {
        const isFitBuddy = item.content && extractTitleFromContent(item.content) === 'FitBuddy';
        const category = extractCategoryFromContent(item.content);
        const isInCategory =
          selectedCategory === 'all' || (category && category === selectedCategory);
        return isFitBuddy && isInCategory;
      })
      .map((item) => {
        const date = new Date(item.updatedAt);
        const dated = `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
        return (
          <PostProfile
            key={item._id}
            content={extractContentFromPost(item.content)}
            image={item.image}
            updatedAt={dated}
            accountname={item.author.accountname}
            username={item.author.username}
            postId={item._id}
            heartCount={item.heartCount}
            commentLength={item.comments.length}
            hearted={item.__v}
            authorId={item.author._id}
            authorImage={item.author.image}
          />
        );
      });
  };
  return (
    <CommunityHome>
      <NavTopBasic title='커뮤니티' />
      <ChipsHome selectedCategory={selectedCategory} onCategoryChange={onCategoryChange} />
      {renderFilteredPosts()}
      <CommunityButton onClick={handleButtonClick} />
      <NavBottom />
    </CommunityHome>
  );
}
