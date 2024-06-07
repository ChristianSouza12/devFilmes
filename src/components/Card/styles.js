import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 30px;
    width: 300px;
    min-height: 500px;
    height: auto; 
    object-fit: cover; 
    
    @media (max-width: 430px) {
      width: 220px;
      border-radius: 15px;
    }
  
  }

  h3 {
    color: white;
    margin-top: 20px;
    
    @media (max-width: 430px) {
      font-size: 15px;
    }
  }

  
`;
