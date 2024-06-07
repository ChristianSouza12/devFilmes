

import styled from "styled-components";

export const Container = styled.div`
display: flex;
margin-top: 30px;
gap:10px;

div{
    display: flex;
    flex-direction: column;

}
p{
    color:white;

}
img{
    height: 200px;
    border-radius: 20px;


}
@media (max-width: 430px) {
    flex-wrap: wrap;
    justify-content: center;
  }


`

export const Title = styled.h4`

font-size: 29px;
font-weight: 700;
color:white;
@media (max-width: 430px) {
    margin: 0 auto;
  }
`

