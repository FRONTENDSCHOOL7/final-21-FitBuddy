import React, { useEffect, useState, useRef } from 'react';
import searchIcon from '../../assets/icons/icon-search.svg';
import { StyledKakaoMap } from '../../pages/mainhome/addGroup/StyledAddGroup';

const { kakao } = window;

export default function KakaoMap({ onSelectLocation, onRequestClose }) {
  const [address, setAddress] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const mapRef = useRef(null);

  const handleChange = (event) => {
    setAddress(event.target.value);
  };
  const handleSelect = (address) => {
    onSelectLocation(address); // 부모 컴포넌트에 주소를 전달
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const places = new kakao.maps.services.Places();
    places.keywordSearch(address, function (results, status) {
      if (status === kakao.maps.services.Status.OK) {
        setSearchResults(results); // 검색 결과를 상태에 저장
        console.log(searchResults);
        // ... 마커 생성 코드 등
      }
    });

    places.keywordSearch(address, function (results, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        const coords = new kakao.maps.LatLng(results[0].y, results[0].x);

        if (mapRef.current.marker) {
          mapRef.current.marker.setMap(null);
        }

        const marker = new kakao.maps.Marker({
          map: mapRef.current,
          position: coords,
        });

        mapRef.current.marker = marker;

        mapRef.current.setCenter(coords);
      }
    });
  };

  const accessToGeo = (position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  };

  const askForLocation = () => {
    navigator.geolocation.getCurrentPosition(accessToGeo);
  };

  useEffect(() => {
    askForLocation();
  }, []);

  useEffect(() => {
    if (latitude && longitude) {
      const container = document.getElementById('map');
      const option = {
        center: new kakao.maps.LatLng(latitude, longitude),
        level: 3,
      };
      mapRef.current = new kakao.maps.Map(container, option);
    }
  }, [latitude, longitude]);

  return (
    <StyledKakaoMap>
      <div className='header'>
        <h1>장소 검색하기</h1>
        <button onClick={onRequestClose} className='closeButton'>
          닫기
        </button>
      </div>
      <div id='map' />
      <form onSubmit={handleSubmit} className='searchBox'>
        <input
          type='text'
          value={address}
          onChange={handleChange}
          className='locationSearch'
          placeholder='장소를 입력해주세요'
        />
        <img src={searchIcon} alt='검색' className='searchIcon' onClick={handleSubmit} />
      </form>
      <ul className='searchList'>
        {searchResults.map((result, index) => (
          <li key={index} onClick={() => handleSelect(result.address_name)}>
            {result.address_name}
          </li>
        ))}
      </ul>
    </StyledKakaoMap>
  );
}
