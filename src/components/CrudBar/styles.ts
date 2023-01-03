import styled from "styled-components";

export const Container = styled.div`
background-color: pink;
width: 100%;
height: 4vw;
border: -1px solid black;
display: flex;
justify-content: center;
align-items: center;
border-radius: 10px 10px 0 0;

form{
    display: flex;
    width: 100%;
    justify-content: space-around;
}
`

export const InputForm = styled.input`
text-align: center;
border-radius: 4px;
padding: 2px 10px 2px 10px;

`

export const ButtonSubmit = styled.input`

padding: 4px 80px 4px 80px;

`