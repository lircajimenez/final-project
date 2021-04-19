import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Image } from "cloudinary-react";
import ImageForm from "./ImageForm";
import banner from "../../assets/banners/toronto.jpg";

const Toronto = () => {
  const [images, setImages] = useState();
  const [imageInput, setImageInput] = useState("");
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    fetch("/toronto")
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
      });
  }, []);

  // const handleImageInput = (ev) => {
  //   const file = ev.target.files[0];
  //   setSelecetedImage(file);
  //   setImageInput(ev.target.value);
  // };

  // const handleSubmit = (ev) => {
  //   ev.preventDefault();
  //   if (!selectedImage) return;
  //   const reader = new FileReader();
  //   reader.readAsDataURL(selectedImage);
  //   reader.onloadend = () => {
  //     uploadImage(reader.result);
  //   };
  //   reader.onerror = () => {
  //     console.error("error");
  //     // setError("Try again");
  //   };
  // };

  const uploadImage = (base64EncodedImage) => {
    fetch("/toronto", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: base64EncodedImage }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setImages([data.public_id, ...images]);
      });
    setImageInput("");
  };

  return (
    <>
      <Banner>
        <H1>Toronto</H1>
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
        <ImageForm
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          imageInput={imageInput}
          setImageInput={setImageInput}
          uploadImage={uploadImage}
          // handleSubmit={handleSubmit}
          // handleImageInput={handleImageInput}
        />
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

export default Toronto;
