import React from 'react';
import styled from 'styled-components';
import Map from './Map';
import 'bootstrap/dist/css/bootstrap.min.css';

const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
  padding: 20px;
  text-align: center;
`;

const Header = styled.h1`
  margin-bottom: 20px;
`;

const Description = styled.p`
  margin-bottom: 40px;
  font-size: 1.2em;
`;

const LandingPage = () => {
  return (
    <LandingContainer>
      <Header>Google Maps: An Amazing Tool Used Every Day!</Header>
      <Description>Explore the world with Google Maps. Find local businesses, view maps and get driving directions in Google Maps.</Description>
      <Map />
    </LandingContainer>
  );
}

export default LandingPage;
