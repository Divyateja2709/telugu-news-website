import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  50% { transform: rotate(180deg); }
  100% { transform: rotate(360deg); }
`;

export const SpinnerContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const LoadingCircle = styled.div`
  width: 45px;
  height: 45px;
  border: 5px solid;
  border-image: linear-gradient(45deg, #008080, #32cd32);
  border-image-slice: 1;
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${spinAnimation} 1.2s ease-in-out infinite;
`;
