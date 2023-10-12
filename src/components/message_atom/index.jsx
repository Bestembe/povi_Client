import { useEffect, useRef, useState } from 'react';
import * as S from './style';

export default function MessageAtom({ text, role, mapSrc }) {
  const currentPosition = { lat: 35.09452124935954, lng: 129.03910204043697 };
  const [destination, setDestination] = useState(currentPosition);
  const MapRef = useRef(null);
  let map;

  function getLocationOf(address) {
    window.kakao.maps.load(() => {
      const geocoder = new window.kakao.maps.services.Places();
      geocoder.keywordSearch(address, (result, status) => {
        const y = parseFloat(result[0].y), x = parseFloat(result[0].x);
        console.log(x, y);
        if (result !== "ERROR" && status === kakao.maps.services.Status.OK) {
          const height = y > currentPosition.lat ? y - currentPosition.lat : currentPosition.lat - y,
            width = x > currentPosition.lng ? x - currentPosition.lng : currentPosition.lng - x;
          console.log(width > height ? Math.floor(Math.log2(width / 0.005)) : Math.floor(Math.log2(height / 0.005)))
          // console.log(x, y, status);
          setDestination(e => ({ lat: result[0].y, lng: result[0].x }));
          const coords = new kakao.maps.LatLng(y, x);
          const marker = new kakao.maps.Marker({
            map: map,
            position: coords
          });
          map.setLevel(width > height ? Math.floor(Math.log2(width / 0.0002)) : Math.floor(Math.log2(height / 0.0002)))
          map.setCenter(new window.kakao.maps.LatLng((y + currentPosition.lat) / 2, (x + currentPosition.lng) / 2)) // 지도의 중심좌표
        }
      })
    })
  }
  const onLoadKakaoMap = () => {
    if (mapSrc) {
      window.kakao.maps.load(() => {
        const mapContainer = MapRef.current;
        const mapOption = {
          center: new window.kakao.maps.LatLng(currentPosition.lat, currentPosition.lng), // 지도의 중심좌표
          level: 4, // 지도의 확대 레벨
        };
        map = new window.kakao.maps.Map(mapContainer, mapOption);
        const marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(currentPosition.lat, currentPosition.lng)
        })
        getLocationOf(mapSrc);
      });
    }
  };

  useEffect(e => {
    console.log(mapSrc)
    const appKey = '508d4a9e601d2ea8c1d2dc736bdc84e3';
    const mapScript = document.createElement('script');
    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${appKey}&libraries=services&autoload=false`;
    document.head.appendChild(mapScript);
    mapScript.addEventListener('load', onLoadKakaoMap);
  }, [])
  return <>
    <S.Background style={{ justifyContent: `${role === 'right' ? 'right' : 'left'}` }}>
      {role === 'left' && <svg width="74" height="51" viewBox="0 0 74 51" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M38.8245 47.5191C37.1434 49.0443 34.5791 49.0443 32.898 47.5191L16.503 32.6445C13.848 30.2356 15.0239 25.8336 18.5265 25.0696L34.9215 21.4937C35.5407 21.3587 36.1818 21.3587 36.801 21.4937L53.196 25.0696C56.6986 25.8336 57.8745 30.2356 55.2195 32.6445L38.8245 47.5191Z" fill="black" />
        <path d="M10.683 24.7411L5.40233 17.532C5.29205 17.3814 5.24943 17.2139 5.27449 17.0295C5.29954 16.8451 5.38734 16.6977 5.53789 16.5874L9.95601 13.3511C12.2915 11.6404 14.2482 11.862 15.826 14.0161C17.401 16.1663 17.0208 18.0967 14.6853 19.8075L11.9117 21.8392L12.866 23.142C12.9763 23.2926 13.017 23.4615 12.9881 23.6488C12.9602 23.8293 12.871 23.9748 12.7204 24.085L11.6318 24.8825C11.4813 24.9927 11.3138 25.0353 11.1293 25.0103C10.9421 24.9814 10.7933 24.8917 10.683 24.7411ZM10.7113 20.2005L12.8248 18.6523C13.4734 18.1773 13.8864 17.7087 14.0639 17.2465C14.2386 16.7804 14.0983 16.2366 13.643 15.6151C13.1849 14.9898 12.7088 14.692 12.2146 14.7218C11.7176 14.7478 11.1448 14.9983 10.4962 15.4734L8.38273 17.0215L10.7113 20.2005Z" fill="#265179" />
        <path d="M59.7807 22.4618L66.5044 16.5536C66.6446 16.4305 66.8093 16.375 66.9984 16.3872C67.1875 16.3994 67.3436 16.4756 67.4668 16.6158L68.348 17.6187C68.4775 17.766 68.5346 17.9325 68.5192 18.118C68.507 18.3071 68.4308 18.4632 68.2906 18.5864L61.5777 24.485C61.4375 24.6082 61.2713 24.6619 61.079 24.6461C60.8936 24.6307 60.7392 24.553 60.616 24.4128L59.7348 23.4099C59.6116 23.2697 59.5525 23.1082 59.5575 22.9254C59.5662 22.7395 59.6406 22.5849 59.7807 22.4618Z" fill="#265179" />
        <path d="M34.6543 14.2247C33.7631 15.1693 32.3742 15.7308 30.4877 15.9091C28.6059 16.0869 27.1365 15.7956 26.0793 15.0352C25.0216 14.27 24.4052 12.9608 24.2301 11.1076C24.0549 9.25447 24.4153 7.85536 25.3113 6.91032C26.2074 5.96527 27.5962 5.40382 29.478 5.22597C31.3645 5.04766 32.834 5.33896 33.8864 6.09985C34.9436 6.86029 35.5598 8.16709 35.7349 10.0203C35.9101 11.8734 35.5499 13.2749 34.6543 14.2247ZM32.0781 7.79201C31.5429 7.26582 30.737 7.0536 29.6603 7.15536C28.5885 7.25667 27.8366 7.61612 27.4047 8.23372C26.9776 8.85087 26.8176 9.72635 26.9247 10.8602C27.0314 11.9892 27.3524 12.8168 27.8876 13.343C28.4271 13.864 29.2328 14.0738 30.3047 13.9725C31.3813 13.8708 32.1334 13.5137 32.561 12.9013C32.9881 12.2842 33.1483 11.4111 33.0416 10.282C32.9345 9.14821 32.6133 8.31821 32.0781 7.79201Z" fill="#265179" />
        <path d="M45.3694 5.62462C45.3591 5.56126 45.3639 5.4976 45.3839 5.43364C45.4053 5.36512 45.472 5.29571 45.5841 5.22542C45.7023 5.15198 45.839 5.13948 45.9943 5.18791L47.495 5.65584C47.8513 5.76695 48.0555 6.0687 48.1074 6.56108L48.9175 13.2947L53.4111 8.21488C53.7323 7.84387 54.0718 7.71163 54.4296 7.81817L55.9302 8.28611C56.0901 8.33596 56.1955 8.42396 56.2464 8.5501C56.2987 8.67168 56.3142 8.76673 56.2928 8.83525C56.2729 8.8992 56.2429 8.95503 56.203 9.00273L49.5895 16.3237C49.2295 16.7227 48.8302 16.8539 48.3916 16.7171L47.4049 16.4094C46.9664 16.2727 46.7124 15.9378 46.643 15.4049L45.3694 5.62462Z" fill="#265179" />
      </svg>
      }
      <div className='message' style={{
        borderBottomLeftRadius: `${role === 'left' ? '0px' : '20px'}`,
        borderBottomRightRadius: `${role === 'right' ? '0px' : '20px'}`,
        backgroundColor: `${role === 'right' ? '#738CFF' : 'white'}`,
        color: `${role === 'right' ? 'white' : 'black'}`,
        border: `${role === 'right' ? 'none' : '1px solid gray'}`
      }}>
        {text}
        {mapSrc && <div id="map" ref={MapRef} style={{ width: '500px', height: "400px" }}></div>}
      </div>
    </S.Background>
  </>
}