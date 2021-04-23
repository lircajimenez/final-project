import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../UserContext";
import { Image } from "cloudinary-react";
import ImageForm from "./ImageForm";
import MapToronto from "../maps/MapToronto";
import Modal from "./Modal";
import banner from "../../assets/banners/toronto.jpg";
import city from "../../assets/illustrations/Big-Apple.svg";
import location from "../../assets/illustrations/LocationMap.svg";

const Toronto = () => {
  const { userSigned } = useContext(UserContext);
  const [images, setImages] = useState();
  const [imageInput, setImageInput] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    fetch("/toronto")
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
      });
  }, []);

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
        setImages([data.url, ...images]);
        if (data.status === 201) {
          setSuccessMsg("Image uploaded successfully");
          setPreviewImage("");
        }
      });
    setImageInput("");
  };

  return (
    <>
      <Banner>
        <H1>Toronto</H1>
      </Banner>
      <Wrapper>
        <Container>
          <Img src={city} alt="City illustration" />
          <Text>
            <h2>About Toronto</h2>
            <p>
              We've heard Toronto described as "New York City run by the Swiss,"
              and it's true—you can find world-class theater, shopping and
              restaurants here, but the sidewalks are clean and the people are
              friendly. The best place to start is literally at the top—the CN
              Tower, the tallest freestanding structure in the Western
              Hemisphere.
            </p>
          </Text>
        </Container>
        {userSigned ? (
          <ImageForm
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
            imageInput={imageInput}
            setImageInput={setImageInput}
            uploadImage={uploadImage}
            successMsg={successMsg}
            previewImage={previewImage}
            setPreviewImage={setPreviewImage}
          />
        ) : (
          <div style={{ color: "red" }}>Log-in to contribute</div>
        )}
        <div>
          {images &&
            images.map((image, index) => (
              <Image
                key={index}
                cloudName="dec2frnoe"
                publicId={image}
                width="350"
                height="250"
                onClick={() => setModalImage(image)}
              />
            ))}
        </div>
        {modalImage && (
          <Modal modalImage={modalImage} setModalImage={setModalImage} />
        )}
        <MapContainer>
          <Div>
            <h3>Want to go there?</h3>
            <p>
              Interact with the map to find the location of some of the
              photographs.{" "}
            </p>
            <img src={location} alt="Map illustration" />
          </Div>
          <MapToronto />
        </MapContainer>
      </Wrapper>
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
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px;
  text-align: center;
  color: white;
  font-size: 18px;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 70vh;
`;
const Img = styled.img`
  width: 45%;
`;
const Text = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.8;
  overflow: auto;

  h2 {
    margin-top: 40px;
    font-size: 2em;
    letter-spacing: 0.2rem;
  }

  p {
    text-align: left;
    margin-top: 10px;
    letter-spacing: 1.5px;
    font-size: 0.9em;
  }
`;
const MapContainer = styled.div`
  display: flex;
  margin-top: 30px;
  width: 100%;
  height: 60vh;
  align-items: center;
  justify-content: space-evenly;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 80%;
  align-items: center;
  justify-content: center;
  line-height: 1.8;

  h3 {
    font-size: 1em;
    letter-spacing: 0.1rem;
    font-weight: 700;
  }

  p {
    margin-top: 10px;
    letter-spacing: 1.5px;
    font-size: 0.6em;
  }

  img {
    width: 50%;
    margin-top: 15px;
  }
`;

export default Toronto;
