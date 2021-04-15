import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Image } from "cloudinary-react";

import banner from "../../assets/banners/tokyo.jpg";

const Tokyo = () => {
  const [images, setImages] = useState();

  useEffect(() => {
    fetch("/tokyo")
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
      });
  }, []);

  return (
    <>
      <Banner>
        <H1>Tokyo</H1>
      </Banner>
      <Container>
        <p>
          I love cats i am one wake up scratch humans leg for food then purr
          then i have a and relax run up and down stairs so scratch the box
          catching very fast laser pointer so jump on counter removed by human
          jump on counter again removed by human meow before jumping on counter
          this time to let the human know am coming back i see a bird i stare at
          it i meow at it i do a wiggle come here birdy for run in circles.
          Burrow under covers munch, munch, chomp, chomp or i will be pet i will
          be pet and then i will hiss but walk on keyboard so ask to go outside
          and ask to come inside and ask to go outside and ask to come inside.
          Kick up litter. Loved it, hated it, loved it, hated it hey! you there,
          with the hands so climb a tree, wait for a fireman jump to fireman
          then scratch his face prance along on top of the garden fence, annoy
          the neighbor's dog and make it bark or sleep on keyboard. Chew the
          plant check cat door for ambush 10 times before coming in.
        </p>
      </Container>
      <Gallery>
        {images &&
          images.map((image, index) => (
            <Image
              key={index}
              cloudName="dec2frnoe"
              publicId={image}
              width="300"
            />
          ))}
      </Gallery>
    </>
  );
};

const Banner = styled.div`
  background-image: url(${banner});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const H1 = styled.h1`
  color: white;
  font-size: 80px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px;
  text-align: center;
  color: white;
  font-size: 18px;
`;
const Gallery = styled.div`
  height: 100vh;
  padding: 20px;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
  /* grid-template-rows: auto; */
`;

export default Tokyo;
