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
  lat: 35.669626,
  lng: 139.7611617,
};

const MapTokyo = () => {
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
        zoom={12}
        center={center}
        options={options}
      >
        <Marker
          position={{ lat: 35.7147869, lng: 139.7957594 }}
          icon={{
            url:
              "https://res.cloudinary.com/dec2frnoe/image/upload/v1618479328/cities_images/moiz-k-malik-cG22tmcFAmg-unsplash_stiqd5.jpg",
            scaledSize: new window.google.maps.Size(50, 40),
          }}
        />
        <Marker
          position={{ lat: 35.6559217, lng: 139.7421035 }}
          icon={{
            url:
              "https://res.cloudinary.com/dec2frnoe/image/upload/v1618479323/cities_images/daryan-shamkhali-bbFaQAg_lBA-unsplash_poueml.jpg",
            scaledSize: new window.google.maps.Size(50, 40),
          }}
        />
        <Marker
          position={{ lat: 35.6274626, lng: 139.7450217 }}
          icon={{
            url:
              "https://res.cloudinary.com/dec2frnoe/image/upload/v1618479321/cities_images/alex-knight-Ys-DBJeX0nE-unsplash_irterx.jpg",
            scaledSize: new window.google.maps.Size(50, 40),
          }}
        />
        <Marker
          position={{ lat: 35.664678, lng: 139.7692793 }}
          icon={{
            url:
              "https://res.cloudinary.com/dec2frnoe/image/upload/v1618479327/cities_images/michael-demarco-QkM2yEQcuSA-unsplash_syvq11.jpg",
            scaledSize: new window.google.maps.Size(50, 40),
          }}
        />
      </GoogleMap>
    </>
  );
};

export default MapTokyo;
