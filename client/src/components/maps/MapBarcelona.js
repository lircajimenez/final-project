import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import MapStyles from "./MapStyles";

const libraries = ["places"];
const mapContainerStyle = {
  width: "50vw",
  height: "50vh",
};
const options = {
  styles: MapStyles,
  disableDefaultUI: true,
  zoomControl: true,
  streetViewControl: true,
};
const center = {
  lat: 41.385063,
  lng: 2.173404,
};

const MapBarcelona = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (loadError) return "Error loading map";
  if (!isLoaded) return "Loading map";

  return (
    <>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={13}
        center={center}
        options={options}
      >
        <Marker
          position={{ lat: 41.403404, lng: 2.174486 }}
          icon={{
            url:
              "https://res.cloudinary.com/dec2frnoe/image/upload/v1618480007/cities_images/siyuan-j4eJ3gXlVQ0-unsplash_qvmnci.jpg",
            scaledSize: new window.google.maps.Size(80, 60),
          }}
        />
        <Marker
          position={{ lat: 41.3767962, lng: 2.1921007 }}
          icon={{
            url:
              "https://res.cloudinary.com/dec2frnoe/image/upload/v1618480002/cities_images/d-f-y-b-travel-captures-Dw-0Sic6dgU-unsplash_usvmxz.jpg",
            scaledSize: new window.google.maps.Size(80, 60),
          }}
        />
        <Marker
          position={{ lat: 41.4144948, lng: 2.1505058 }}
          icon={{
            url:
              "https://res.cloudinary.com/dec2frnoe/image/upload/v1618480007/cities_images/vitor-monteiro-jiAv24Lc3T0-unsplash_lewuqc.jpg",
            scaledSize: new window.google.maps.Size(80, 60),
          }}
        />
        <Marker
          position={{ lat: 41.3678111, lng: 2.1460426 }}
          icon={{
            url:
              "https://res.cloudinary.com/dec2frnoe/image/upload/v1618480003/cities_images/david-russeler-E0xK8SrIzYA-unsplash_camh86.jpg",
            scaledSize: new window.google.maps.Size(80, 60),
          }}
        />
      </GoogleMap>
    </>
  );
};

export default MapBarcelona;
