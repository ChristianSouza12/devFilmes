

import styled  from "styled-components";


export const Container = styled.div`

    display: flex;
    margin-top: 30px;
    gap:10px;

    span{
        padding:8px 18px;
        border:2px solid white;
        border-radius: 30px;
        font-size: 12px;
        font-weight: 600;
        background-color: #000014;
        color:white;
        display: flex;
        justify-content: center;
    }
    @media (max-width: 430px) {
    flex-wrap: wrap;
  }

`