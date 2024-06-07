

import styled , {css} from "styled-components";

const buttonStyles =css`

border:3px solid white;
    background:transparent;
    color:white;
    border-radius: 30px;
    padding:10px 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 500;
    transition:ease-in 0.3s;

    &:hover{
        background-color: white;
        color:#232f3e;
        transition:ease-in-out 0.3s;
    }




`





export  const ButtonWhite = styled.button`

${buttonStyles}


`

export  const ButtonRed = styled.button`

${buttonStyles}

background-color: #fe9900;
border:4px solid transparent;
box-shadow: 0px 0px 7px 8px rgb(255 153 0/30%) ;

&:hover{
    box-shadow: 0px 0px 7px 15px rgb(20 110 180/30%)  ;
    background:#136eb4;
    color:white;
    
}


`