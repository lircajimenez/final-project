import React from "react";
import styled from "styled-components";

const Modal = ({ modalImage, setModalImage }) => {
  const handleClick = (ev) => {
    if (ev.target.classList.contains("backdrop")) {
      setModalImage(null);
    }
  };

  return (
    <Div className="backdrop" onClick={handleClick}>
      <img src={modalImage} alt="enlarged picture" />
    </Div>
  );
};

const Div = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);

  img {
    display: block;
    max-width: 90%;
    max-height: 70%;
    margin: 60px auto;
    box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.5);
    border: 3px solid white;
  }
`;

export default Modal;
