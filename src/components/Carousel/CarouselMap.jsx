import React from 'react';
import Carousel from './Carousel';
import { CarouselMapWrapper } from './StyledCarousel';
import { Link } from 'react-router-dom';

export default function CarouselMap({ myProduct }) {
  let processedData = [];
  if (myProduct.product) {
    const myJoinData = myProduct.product;
    processedData = myJoinData.map((product) => {
      const createdAt = new Date(product.createdAt);
      const formattedCreatedAt = `${createdAt.getFullYear()}-${(createdAt.getMonth() + 1)
        .toString()
        .padStart(2, '0')}-${createdAt.getDate().toString().padStart(2, '0')}`;
      return {
        createdAt: formattedCreatedAt,
        author: product.author.accountname,
        itemName: product.itemName,
        itemImage: product.itemImage,
        link: product.link,
        //보낼 때 링크에 인원수, 장소,
        price: product.price,
        id: product.id,
        // 다른 필요한 정보도 추가할 수 있습니다
      };
    });
  }

  return (
    <CarouselMapWrapper>
      {processedData
        .filter((item) => item.itemName === 'FitBuddy')
        .map((item, index) => {
          let link = item.link;
          let _id = item.id;

          let contentData = link.split('\n');
          const result = {};

          for (let i = 1; i < contentData.length - 1; i++) {
            const line = contentData[i].trim();
            const [key, value] = line.split(':');
            result[key.trim()] = value.trim().replace(/,+$/, '');
          }

          return (
            <Link to={`/group/${_id}`} key={_id}>
              <Carousel
                key={_id}
                image={item.itemImage}
                title={result.title}
                time={result.time}
                location={result.location}
                day={result.day}
                cost={result.cost}
                attendees={result.attendees}
              />
            </Link>
          );
        })}
    </CarouselMapWrapper>
  );
}
