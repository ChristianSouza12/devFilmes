import styled  from 'styled-components';




export const Background = styled.div`
  background-image: url(${props => props.img});
  height: 50vh;
  
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
    @media (max-width: 430px) {
      bottom: 185px;
    }
  
}
`
export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;
  max-width: 1500px;

 

  @media (max-width: 430px) {
    flex-direction: column-reverse;
    width: 98%;
    justify-content: center;
    margin-top: 50%;
  }
`;



