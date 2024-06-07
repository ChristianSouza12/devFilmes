import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  padding: 50px;
  max-width: 1200px;
  position: relative; /* Added for positioning the close button */

  iframe {
    border: none;
    @media (max-width: 430px) {
      width: 100%;
      height: 300px;
    }
  }
`;

export const Background = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 0.8s ease-in-out;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 20px;
  background-color: transparent;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  transition:0.3s ease-in-out;

  i {
    pointer-events: none; /* To ensure clicking the icon triggers the button click */
  }

  &:hover {
    color: red;
  }
  @media (max-width: 430px) {
      bottom: 88%;
    }
    @media (max-width: 430px) {
    width: 85%;
    padding: 1px;
  }
`;
