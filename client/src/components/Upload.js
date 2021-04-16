import React, { useState } from "react";
import styled from "styled-components";

const Upload = () => {
  const [imageInput, setImageInput] = useState("");
  const [selectedImage, setSelecetedImage] = useState("");

  const handleImageInput = (ev) => {
    const file = ev.target.files[0];
    setSelecetedImage(file);
    setImageInput(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!selectedImage) return;
    //this allows web apps to read file contents
    const reader = new FileReader();
    //this convert image into an url
    reader.readAsDataURL(selectedImage);
    //this triggers when the reading operation is done
    reader.onloadend = () => {
      uploadImage(reader.result);
    };
    reader.onerror = () => {
      console.error("error");
      // setError("Try again");
    };
  };
  //base64EncodedImage string representation of the image
  const uploadImage = async (base64EncodedImage) => {
    //console.log("encoded string", base64EncodedImage);
    try {
      await fetch("/upload", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: base64EncodedImage }),
      });
      setImageInput("");
    } catch (err) {
      console.log("error", err);
    }
  };

  return (
    <Wrapper>
      <h1>Upload your image</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          name="image"
          onChange={(ev) => handleImageInput(ev)}
          value={imageInput}
        />
        <button type="submit">Submit</button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  height: 80vh;
`;

export default Upload;
