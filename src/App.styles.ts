import styled from "styled-components";




export const Container = styled.div`
background-color: #FFDDF8;
height: 100vh;
width: 100vw - 30vw;
display: flex;
justify-content: center;
align-items: center;
padding: 0px 15vw 0 15vw;
flex-direction: column;
`


export const LogoContainer = styled.div`
width: 440px;
height: 120px;
background-color: pink;
position: absolute;
border-radius: 90px 30px 90px 30px;
display: flex;
text-align: center;
align-items: center;
justify-content: center;
top: 16px;
box-shadow: -1px 0px 41px 1px rgba(248,248,248,0.8);

@media (max-width: 760px){

    &{
    display: none;
        }

}

h1{
    font-family: 'Dancing Stript', sans-serif;
    color: white;
    font-size: 42px;
    -webkit-text-stroke: 0.4px #000;
    
}
`

