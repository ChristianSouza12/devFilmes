import styled from "styled-components";


export const Container = styled.div`
min-height: 100px;
z-index: 99;
position: fixed;
top:0;
display: flex;
padding:10px;
justify-content: space-evenly;
gap: 45%;
align-items: center;
width: 100%;
img{
    width: 25%;
    @media (max-width: 430px) {
      width: 50%;
      padding-bottom: 8px;
    }
  }

  @media (max-width: 430px) {
    width: auto;
    height: 110px;
    padding: 16px 10px;
    justify-content: center;
    flex-direction: column;
  

}

background-color: ${(props) => (props.changeBackground ? "rgba(20, 110, 180, 0.35)" : "transparent")};
  box-shadow: ${(props) => (props.changeBackground ? "0 8px 32px 0 rgba(31, 38, 135, 0.37)" : "none")};
  backdrop-filter: ${(props) => (props.changeBackground ? "blur(13.5px)" : "none")};
  -webkit-backdrop-filter: ${(props) => (props.changeBackground ? "blur(13.5px)" : "none")};
  transition: background-color 0.8s ease-in-out, box-shadow 0.8s ease-in-out, backdrop-filter 0.8s ease-in-out, -webkit-backdrop-filter 0.8s ease-in-out;



`

export const Menu = styled.ul`
display: flex;
list-style: none;
gap:10px 50px;
@media (max-width: 430px) {
    gap: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }


`

export const Link = styled.a`


`

export const Li = styled.li`
font-size: 28px;
font-weight: 600;
cursor: pointer;
position: relative;
a{
    text-decoration: none;
    color:white;
}
&::after{
    content:"";
    height: 3px;
    width: ${props => props.isActive ? "100%" : "0"};
    background-color: 	#ff9900;
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%);

    transition: width 0.4s ease-in-out;
    
    @media (max-width: 430px) {
      height: 3px;
    }
  

}

&:hover::after{
    width: 100%;

}
@media (max-width: 430px) {
    font-size: 22px;
  }


`