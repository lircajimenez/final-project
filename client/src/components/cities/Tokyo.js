import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../UserContext";
import { Image } from "cloudinary-react";
import ImageForm from "./ImageForm";
import MapTokyo from "../maps/MapTokyo";
import Modal from "./Modal";
import banner from "../../assets/banners/tokyo.jpg";
import ramen from "../../assets/illustrations/Ramen.svg";
import location from "../../assets/illustrations/LocationMap.svg";

const Tokyo = () => {
  const { userSigned } = useContext(UserContext);
  //state for loading images
  const [images, setImages] = useState();
  //state for uploading images
  const [imageInput, setImageInput] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  //state for modal
  const [modalImage, setModalImage] = useState(null);

  //fetching images
  useEffect(() => {
    fetch("/tokyo")
      .then((res) => res.json())
      .then((data) => {
        //console.log("inside use effect", refetch, data);
        setImages(data);
      });
  }, []);

  //base64EncodedImage string representation of the image
  const uploadImage = (base64EncodedImage) => {
    //console.log("encoded string", base64EncodedImage);
    fetch("/tokyo", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: base64EncodedImage }),
    })
      .then((res) => {
        console.log("inside res", res);
        return res.json();
      })
      .then((data) => {
        console.log("inside fetch", data);
        // setRefetch(!refetch);
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
        <H1>Tokyo</H1>
      </Banner>
      <Wrapper>
        <Container>
          <Img src={ramen} alt="Ramen illustration" />
          <Text>
            <h2>About Tokyo</h2>
            <p>
              With its futuristic skyscrapers, unrivaled food scene, and wild
              nightlife, Tokyo is a rush of pure adrenaline. This vast and
              multifaceted city is famously cutting edge, yet its ancient
              Buddhist temples, vintage teahouses, and peaceful gardens offer a
              serene escape — and a poignant reminder of the city’s long
              history. And for those who know where to look, Tokyo’s smaller
              pleasures (secret ramen spots, shopping alleys, chill record bars)
              are often hiding in plain sight.
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
          {/* {console.log("images", images)} */}
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
          <MapTokyo />
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
  width: 35%;
  height: 65%;
  align-self: center;
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

export default Tokyo;
