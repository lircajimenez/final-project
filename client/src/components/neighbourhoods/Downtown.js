import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Image } from "cloudinary-react";

const Downtown = () => {
  const [images, setImages] = useState();

  const loadImages = async () => {
    try {
      const res = await fetch("/montreal");
      const data = await res.json();
      setImages(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadImages();
  }, []);

  return (
    <Container>
      <H1>Test gallery</H1>
      <div className="gallery">
        {images &&
          images.map((image, index) => (
            <Image
              key={index}
              cloudName="dec2frnoe"
              publicId={image}
              width="300"
              height="auto"
            />
          ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const H1 = styled.h1`
  color: red;
`;

export default Downtown;
