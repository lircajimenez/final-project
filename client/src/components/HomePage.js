import React from "react";
import styled from "styled-components";

import banner from "../assets/images/montreal/marc-olivier-jodoin-qIoF5XHs_Cs-unsplash.jpg";
import img1 from "../assets/images/montreal/stade_olympique.jpeg";
import img2 from "../assets/images/montreal/j-photos-fmykTY9UDt8-unsplash.jpg";
import img3 from "../assets/images/montreal/david-samacoits-etchegoin-4cx2jhLjgPA-unsplash.jpg";
import img4 from "../assets/images/montreal/galaad-linosfil-mxH416bGjgg-unsplash.jpg";
import img5 from "../assets/images/montreal/will-burbano-sCu4Fe66BD4-unsplash.jpg";
import img6 from "../assets/images/montreal/the-bialons-x_CEJ7kn4w4-unsplash.jpg";
import img7 from "../assets/images/montreal/montreal-oratory-st-joseph-oratoire-leo-gonzales-56a63eed5f9b58b7d0e0a7bc.jpeg";
import img8 from "../assets/images/montreal/etienne-delorieux-p7yLcNPDSaU-unsplash.jpg";
import img9 from "../assets/images/montreal/pierre-jarry-yYmhiZxihZU-unsplash.jpg";
import img10 from "../assets/images/montreal/eva-blue-1xgnRBvF_UI-unsplash.jpg";

const HomePage = () => {
  return (
    <>
      <Banner>
        <H1>Montréal</H1>
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
        <div className="img-3"></div>
        <div className="img-5"></div>
        <div className="img-6"></div>
        <div className="img-7"></div>
        <div className="img-8"></div>
        <div className="img-1"></div>
        <div className="img-2"></div>
        {/* <div className="img-3"></div> */}
        <div className="img-4"></div>
        {/* <div className="img-5"></div>
        <div className="img-6"></div> */}
        <div className="img-9"></div>
        <div className="img-10"></div>
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
  /* height: 100vh; */
  padding: 80px;
  text-align: center;
  color: white;
  font-size: 18px; ;
`;
const Gallery = styled.div`
  height: 100vh;
  padding: 20px;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  /* grid-template-rows: auto; */

  div {
    /* width: 100%;
    height: 100%;
    object-fit: cover;
    display: block; */
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }

  .img-1 {
    background-image: url(${img1});
  }
  .img-2 {
    background-image: url(${img2});
  }
  .img-3 {
    background-image: url(${img3});
  }
  .img-4 {
    background-image: url(${img4});
  }
  .img-5 {
    background-image: url(${img5});
  }
  .img-6 {
    background-image: url(${img6});
  }
  .img-7 {
    background-image: url(${img7});
  }
  .img-8 {
    background-image: url(${img8});
  }
  .img-9 {
    background-image: url(${img9});
  }
  .img-10 {
    background-image: url(${img10});
  }
`;
export default HomePage;
