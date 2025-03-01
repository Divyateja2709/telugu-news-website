import React from "react";
import styled, { keyframes } from "styled-components";

// Styled Components for Loader
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const SpinnerRing = styled.div`
  border: 6px solid rgba(0, 0, 0, 0.1);
  border-top: 6px solid #4caf50;  /* Green color (as per your UI preference) */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
`;

const Loader = () => {
  return (
    <LoaderWrapper>
      <SpinnerRing />
    </LoaderWrapper>
  );
};

export default Loader;
