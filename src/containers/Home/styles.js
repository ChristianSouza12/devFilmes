import styled ,{keyframes} from "styled-components";


const scale = keyframes`

    from{
        transform: scale(0);
    }
    to{
        transform: scale(1);
    }


`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  max-width: 1500px;
  @media (max-width: 430px) {
    flex-direction: column-reverse;
    width: 98%;
    justify-content: end;
  }

`;

export const Background = styled.div`
  background-image: url(${props => props.img});
  height: 90vh;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &::before{
    content:"";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  &::after{
    content:"";
    position:absolute;
    bottom:0;
    left: 0;
    width: 100%;
    height: 120px;
    background-image: linear-gradient(to top,  #000014,rgba(0,0,0,0));
}

`;

export const Info = styled.div`
  z-index: 2;
  padding: 20px;
  width: 50%;

  h1 {
    font-size: 5rem;
    font-weight: 700;
    color: white;
    @media (max-width: 430px) {
      font-size: 3rem;
      text-align: center;
    }
  
  }

  p {
    font-size: 20px;
    font-weight: 500;
    color: white;
    margin-top: 30px;
    margin-bottom: 20px;
    @media (max-width: 430px) {
      width: 100%;
      font-size: 14px;
      text-align: justify;
    }
  }
  @media (max-width: 430px) {
    width: 98%;
    font-size: 10px;
    padding: 15px;
  }
`;

export const Poster = styled.div`
  z-index: 2;

  img {
    width: 400px;
    border-radius: 30px;
    animation: ${scale} 0.7s linear;
    @media (max-width: 430px) {
      display: none;
    }
  }
`;

export const ContainerButtons = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 40px;
  @media (max-width: 430px) {
    gap: 10px;
    justify-content: center;
  }
`;
