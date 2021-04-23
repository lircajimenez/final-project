import React, { useState } from "react";
import styled from "styled-components";
import { FcAddImage } from "react-icons/fc";
import { motion } from "framer-motion";
import "../styles.css";

const ImageForm = ({
  selectedImage,
  setSelectedImage,
  imageInput,
  setImageInput,
  uploadImage,
  successMsg,
  previewImage,
  setPreviewImage,
}) => {
  const [error, setError] = useState(null);
  const types = ["image/jpeg", "image/png"];

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };
  };

  // uploading images
  const handleImageInput = (ev) => {
    const file = ev.target.files[0];
    console.log("file", file);
    setImageInput(ev.target.value);
    previewFile(file);

    if (file && types.includes(file.type)) {
      setSelectedImage(file);
      setError("");
    } else {
      setSelectedImage(null);
      setError("Please select jpeg or png file.");
    }
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!selectedImage) return;
    // allows web apps to read file contents
    const reader = new FileReader();
    console.log("reader", reader);
    // convert image into an url
    reader.readAsDataURL(selectedImage);
    // triggers when the reading operation is done
    reader.onloadend = () => {
      console.log("progress", reader.onprogress);
      uploadImage(reader.result);
    };
    reader.onerror = () => {
      console.error("error");
      // setError("Try again");
    };
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <h2>Upload your image</h2>
        <label>
          <input
            type="file"
            name="image"
            onChange={(ev) => handleImageInput(ev)}
            value={imageInput}
          />
          <motion.span whileHover={{ scale: 1.2 }}>
            <FcAddImage />
          </motion.span>
        </label>
        <motion.button
          type="submit"
          className="submit-btn"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
        >
          Upload
        </motion.button>
        <Div>
          {error && <Error>{error}</Error>}
          {successMsg && <Msg>{successMsg}</Msg>}
        </Div>
      </Form>
      <div>
        {previewImage && (
          <img
            src={previewImage}
            alt="preview of image"
            style={{ height: "150px" }}
          />
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  /* border: 1px solid red; */
  height: 50vh;
  width: 60vw;
  margin-bottom: 25px;
`;
const Form = styled.form`
  margin: 30px auto 10px;
  text-align: center;
  /* height: 80%; */
  /* border: 1px solid yellow; */

  label input {
    height: 0;
    width: 0;
    opacity: 0;
  }
  label {
    display: block;
    /* width: 30px;
    height: 30px; */
    /* border: 1px solid red; */
    /* border-radius: 50%; */
    margin: 10px auto;
    line-height: 30px;
    /* color: yellow; */
    font-weight: bold;
    font-size: 40px;
  }
  span:hover {
    cursor: pointer;
  }
`;
const Div = styled.div`
  height: 40px;
  font-size: 0.8rem;
`;
const Msg = styled.div`
  color: green;
`;
const Error = styled.div`
  color: red;
`;

export default ImageForm;
