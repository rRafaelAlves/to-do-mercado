import styled from "styled-components";

export const Table = styled.table`

width: 100%;
border: 1px solid #ff1493;
border-radius: 0 0 10px 10px;
border-spacing: 0;
border-top: none;
box-shadow: 11px 10px 24px -6px rgba(0,0,0,0.62);
background-color: #FFEFFF;
padding-bottom: 20px;

@media (max-width: 760px){

&{
   padding: 2px;
    height: 30vh;
}

}

th{
    padding: 10px 10px;
    text-transform: uppercase;
    color: #000;

    @media (max-width: 760px){

&{
    padding: 0;
    font-size: 12px;
        }

    }
}
td{
    text-align: center;
    &.table__edit :first-child :last-child{
        margin-right: 20px;
        cursor: pointer;

        @media (max-width: 760px){

            &{
                font-size: 13px;
            }

        }

    }
}


`

export const InputFormName = styled.input`

padding: 2px;
width: 120px;

@media (max-width: 760px){

&{
    width: 100px;
}

}

`

export const InputFormCount = styled.input`

padding: 2px;
width: 40px;
`