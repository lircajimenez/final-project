import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import { Image } from "cloudinary-react";
import { motion } from "framer-motion";
import ImageForm from "./ImageForm";
import MontrealMap from "../maps/MapMontreal";
import Modal from "./Modal";
import banner from "../../assets/banners/montreal.jpg";
import terrace from "../../assets/illustrations/Terrace.svg";
import location from "../../assets/illustrations/LocationMap.svg";

const Montreal = () => {
  const { userSigned } = useContext(UserContext);
  const [images, setImages] = useState();
  const [imageInput, setImageInput] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    fetch("/montreal")
      .then((res) => res.json())
      .then((data) => {
        // console.log("fetch montreal", data);
        setImages(data);
      });
  }, []);

  const uploadImage = (base64EncodedImage) => {
    fetch("/montreal", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: base64EncodedImage }),
    })
      .then((res) => {
        // console.log("inside res", res);
        return res.json();
      })
      .then((data) => {
        // console.log("inside fetch", data);
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
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 2 }}
        >
          bonjour/hi, Montréal
        </motion.h1>
      </Banner>
      <Wrapper>
        <Container>
          <Img src={terrace} alt="Terrace illustration" />
          <Text>
            <h2>About Montréal</h2>
            <p>
              Montreal, c’est si bon! This French-speaking city is considered
              the cultural capital of Canada, and is a cosmopolitan celebration
              of Québécois style. A horse-drawn carriage ride around the
              cobblestone streets and grand buildings of Vieux-Montréal will
              give you a taste of European flavor. The Basilique Notre-Dame is a
              confection of stained glass, and the Plateau Mont-Royal district
              will delight you with its quaint boutiques and cafés. Dig in to a
              massive plate of poutine to fuel up for a tour of the epic Olympic
              Park.{" "}
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
          <User>
            <LinkTo to="/login"> Sign-in</LinkTo> or{" "}
            <LinkTo to="/signup">create an account</LinkTo> to upload photo.
          </User>
        )}
        <motion.div layout>
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
        </motion.div>
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
          <MontrealMap />
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
  height: 95vh;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    color: white;
    font-size: 80px;
    font-weight: 600;
  }
`;
const User = styled.div`
  margin-bottom: 25px;
`;
const LinkTo = styled(Link)`
  text-decoration: underline;
  /* color: white; */
  cursor: pointer;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* height: 100vh; */
  padding: 60px;
  text-align: center;
  /* color: white; */
  font-size: 18px;
`;
const Container = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: space-evenly;
  height: 70vh;
  /* border: 1px solid yellow; */
`;
const Img = styled.img`
  width: 45%;
`;
const Text = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
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
  /* border: 1px solid red; */
  margin-top: 30px;
  width: 100%;
  height: 60vh;
  align-items: center;
  justify-content: space-evenly;
`;
const Div = styled.div`
  /* border: 1px solid yellow; */
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
// const Gallery = styled.div`
//   border: 1px solid red;
//   height: 50vh;
//   /* padding: 20px; */
//   display: grid;
//   gap: 1rem;
//   /* grid-template-columns: 1fr 1fr 1fr; */
//   /* grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); */
//   grid-template-columns: repeat(4, 1fr);
//   /* grid-template-rows: auto; */
// `;
export default Montreal;
