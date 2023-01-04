import styled from "styled-components";

export const Container = styled.div`
background-color: #FFC0CB;
width: 100%;
display: flex;
height: 18%;
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

    @media (max-width: 760px){

        .errors{
    color: red; 
    font-size: 12px;

            }
    
    }

    .errors{
    color: red; 
    font-size: 12px;
    
    }
}


`

export const InputForm = styled.input`
text-align: center;
border-radius: 4px;
padding-top: 10px;
padding-bottom: 10px;
border: none;
background-color: #FFEFFF;

@media (max-width: 760px){

        &{
   padding: 12px;
    
    }

}

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

    @media (max-width: 760px){

        &{
     height: 20%;
    
    }

}
`


export const InputContainer = styled.div`
display: flex;
flex-direction: column;

`