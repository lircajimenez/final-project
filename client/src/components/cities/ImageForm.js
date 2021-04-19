import React from "react";
import styled from "styled-components";

const ImageForm = ({
  selectedImage,
  setSelectedImage,
  imageInput,
  setImageInput,
  uploadImage,
}) => {
  // uploading images
  const handleImageInput = (ev) => {
    const file = ev.target.files[0];
    setSelectedImage(file);
    setImageInput(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!selectedImage) return;
    // allows web apps to read file contents
    const reader = new FileReader();
    // convert image into an url
    reader.readAsDataURL(selectedImage);
    // triggers when the reading operation is done
    reader.onloadend = () => {
      uploadImage(reader.result);
    };
    reader.onerror = () => {
      console.error("error");
      // setError("Try again");
    };
  };

  return (
    <Wrapper>
      <h2>Upload your image</h2>
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
  /* height: 80vh; */
`;

export default ImageForm;
