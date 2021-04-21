import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import MapStyles from "./MapStyles";

const libraries = ["places"];
const mapContainerStyle = {
  width: "90vw",
  height: "90vh",
};
const options = {
  styles: MapStyles,
  disableDefaultUI: true,
  zoomControl: true,
  streetViewControl: true,
};
const center = {
  lat: 43.653225,
  lng: -79.383186,
};

const MapToronto = () => {
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
          position={{ lat: 43.627416, lng: -79.3638267 }}
          icon={{
            url:
              "https://res.cloudinary.com/dec2frnoe/image/upload/v1618480135/cities_images/andre-furtado-G5rzFysg9Ro-unsplash_ezyqzl.jpg",
            scaledSize: new window.google.maps.Size(100, 80),
          }}
        />
        <Marker
          position={{ lat: 43.6484686, lng: -79.3738402 }}
          icon={{
            url:
              "https://res.cloudinary.com/dec2frnoe/image/upload/v1618480140/cities_images/nadine-shaabana-r2FVygjQOsM-unsplash_iopigc.jpg",
            scaledSize: new window.google.maps.Size(100, 80),
          }}
        />
        <Marker
          position={{ lat: 43.643144, lng: -79.3805644 }}
          icon={{
            url:
              "https://res.cloudinary.com/dec2frnoe/image/upload/v1618480136/cities_images/jesse-martini-bdKdrV8yAHI-unsplash_ucwf7j.jpg",
            scaledSize: new window.google.maps.Size(100, 80),
          }}
        />
        <Marker
          position={{ lat: 43.6564344, lng: -79.382281 }}
          icon={{
            url:
              "https://res.cloudinary.com/dec2frnoe/image/upload/v1618480137/cities_images/ilya-cher-UHFTNwaQg9o-unsplash_mdguyu.jpg",
            scaledSize: new window.google.maps.Size(100, 80),
          }}
        />
      </GoogleMap>
    </>
  );
};

export default MapToronto;
