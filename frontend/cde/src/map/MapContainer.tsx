import React from "react";
import { MapMarker, Map } from "react-kakao-maps-sdk";

const KakaoMap = () => {
    return (
        <Map center={{ lat: 37.631537859892674, lng: 127.07599401910618 }} style={{ width: "100%", height: "200px" }}>
            <MapMarker position={{ lat: 37.631537859892674, lng: 127.07599401910618 }}>
                <div style={{ color: "#000" }}>프론티어관 119호</div>
            </MapMarker>
        </Map>
    );
};

export default KakaoMap;