import React, { useEffect, useState, useRef } from 'react';
const { kakao } = window;

export default function KakaoMap() {
  const [address, setAddress] = useState('');
  const mapRef = useRef(null);

  const handleChange = (event) => {
    setAddress(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const places = new kakao.maps.services.Places();

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

    setAddress(''); // 키워드 검색 후에는 입력 필드를 초기화합니다.
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
      <div
        id='map'
        style={{
          width: '500px',
          height: '500px',
        }}
      />
      <form onSubmit={handleSubmit}>
        <input type='text' value={address} onChange={handleChange} />
        <button type='submit'>주소 검색</button>
      </form>
    </div>
  );
}
