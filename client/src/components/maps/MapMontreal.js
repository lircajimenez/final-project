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
  lat: 45.503727,
  lng: -73.595759,
};

const MapMontreal = () => {
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
          position={{ lat: 45.556073, lng: -73.549998 }}
          icon={{
            url:
              "https://res.cloudinary.com/dec2frnoe/image/upload/v1618794851/cities_images/stade_olympique_wqw5ag.jpg",
            scaledSize: new window.google.maps.Size(80, 60),
          }}
        />
        <Marker
          position={{ lat: 45.514131, lng: -73.531539 }}
          icon={{
            url:
              "https://res.cloudinary.com/dec2frnoe/image/upload/v1618794850/cities_images/brandon-sehl-EymQt7aOWAw-unsplash_v3uefu.jpg",
            scaledSize: new window.google.maps.Size(80, 60),
          }}
        />
        <Marker
          position={{ lat: 45.521596, lng: -73.543558 }}
          icon={{
            url:
              "https://res.cloudinary.com/dec2frnoe/image/upload/v1618794850/cities_images/eva-blue-1xgnRBvF_UI-unsplash_xbbchu.jpg",
            scaledSize: new window.google.maps.Size(80, 60),
          }}
        />
        <Marker
          position={{ lat: 45.514319, lng: -73.585107 }}
          icon={{
            url:
              "https://res.cloudinary.com/dec2frnoe/image/upload/v1618794852/cities_images/parc-mont-royal_rhlaht.jpg",
            scaledSize: new window.google.maps.Size(80, 60),
          }}
        />
      </GoogleMap>
    </>
  );
};

export default MapMontreal;
