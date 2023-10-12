import Script from 'next/script';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=508d4a9e601d2ea8c1d2dc736bdc84e3&autoload=false`;

const KakaoMap = ({lat, lng}) => {
  console.log(lat,lng)
  return (
    <>
      <Script src={KAKAO_SDK_URL} strategy="beforeInteractive"/>
      <Map
        center={{ lat:35.094770, lng:129.039182 }} 
        style={{ width: '40%', height: '90%' }}
      >
        <MapMarker
          position={{
            lat:35.094770,
            lng:129.039182
          }}
        ></MapMarker>
      </Map>
    </>
  );
};

export default KakaoMap;