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

th{
  
    padding: 10px 10px;
    text-transform: uppercase;
    color: #FFF;
    font-size: 18px;
     -webkit-text-stroke: 0.6px #000;
    
    
}
td{
  
    text-align: center;

    &.table__edit :first-child{
        margin-right: 20px;
        cursor: pointer;
    }
   
}

`