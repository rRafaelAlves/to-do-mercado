import styled from "styled-components";

export const Container = styled.div`
background-color: #FFC0CB;
width: 100%;
display: flex;
height: 10%;
justify-content: center;
align-items: center;
border-radius: 10px 10px 0 0;


@media (max-width: 760px){

    &{
        height: 28%;
        width: 100%;
    }

form{
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    }
}

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
border: none;

`

export const ButtonSubmit = styled.input`

padding: 4px 80px 4px 80px;
border: none;
border-radius: 4px;
background-color: white;
text-transform: uppercase;
cursor: pointer;
transition: ease-in-out 0.2s;


    &:hover{
        background-color: #FFDDF8;
        color: #111;
    }
`