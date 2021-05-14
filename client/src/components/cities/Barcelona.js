import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../UserContext";
import { Image } from "cloudinary-react";
import { motion } from "framer-motion";
import ImageForm from "./ImageForm";
import MapBarcelona from "../maps/MapBarcelona";
import Modal from "./Modal";
import banner from "../../assets/banners/barcelona.jpg";
import barcelona from "../../assets/illustrations/HomeVacations.svg";
import location from "../../assets/illustrations/LocationMap.svg";

const Barcelona = () => {
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

  // fetching images
  useEffect(() => {
    fetch("/barcelona")
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
      });
  }, []);

  //base64EncodedImage string representation of the image
  const uploadImage = (base64EncodedImage) => {
    //console.log("encoded string", base64EncodedImage);
    fetch("/barcelona", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: base64EncodedImage }),
    })
      .then((res) => {
        //console.log("inside res", res);
        return res.json();
      })
      .then((data) => {
        //console.log("inside fetch", data);
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
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 2 }}
        >
          hola, Barcelona
        </motion.h1>
      </Banner>
      <Wrapper>
        <Container>
          <Img src={barcelona} alt="Illustration" />
          <Text>
            <h2>About Barcelona</h2>
            <p>
              Bustling markets, tree lined blocks, and fantastical architecture
              cozy up to one another in this dreamy Mediterranean beach town.
              Paella and pintxos bars, exceptional seafood, standout local
              wines, a world-class arts scene, and bumping nightlife, Barcelona
              effortlessly blends the history of its districts with a healthy
              appetite for the new.
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
          <MapBarcelona />
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
  padding: 60px;
  text-align: center;
  /* color: white; */
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

export default Barcelona;
