import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <HomeContainer>
      <HomeHeader>Welcome to our Online Store</HomeHeader>
      <HeroImage src="../assets/Hero.jpg" alt="Hero image" />
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  margin: 2rem;
`;

const HomeHeader = styled.h1`
  margin-bottom: 2rem;
`;
const HeroImage = styled.img`
  width: 60%;
  height: auto;
`;
