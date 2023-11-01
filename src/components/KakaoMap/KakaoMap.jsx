import React, { useEffect, useState, useRef } from 'react';
const { kakao } = window;

export default function KakaoMap({ onSelectLocation }) {
  const [address, setAddress] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const mapRef = useRef(null);

  const handleChange = (event) => {
    setAddress(event.target.value);
  };
  const handleSelect = (address) => {
    onSelectLocation(address); // 부모 컴포넌트에 주소를 전달
    // 필요하다면 지도의 마커도 여기에서 업데이트
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

  useEffect(() => {
    const container = document.getElementById('map');
    const option = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    mapRef.current = new kakao.maps.Map(container, option);
  }, []);

  return (
    <div>
      <div id='map' style={{ width: '500px', height: '500px' }} />
      <form onSubmit={handleSubmit}>
        <input type='text' value={address} onChange={handleChange} />
        <button type='submit'>주소 검색</button>
      </form>
      <ul>
        {searchResults.map((result, index) => (
          <li key={index} onClick={() => handleSelect(result.address_name)}>
            {result.address_name}
          </li>
        ))}
      </ul>
    </div>
  );
}
