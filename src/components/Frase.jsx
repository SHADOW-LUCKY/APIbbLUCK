import React from 'react';
import styled from '@emotion/styled'
// css
const ContenedorFrase= styled.div`//iniciar con mayus(por si algun problem)
padding:3rem;
border-radius:.5rem;
background-color:#fff;
max-width:800px;
h1{
    font-family:Arial,Helvetica,sans-serif;
    text-align:center;
    position:relative;
    padding-left:4rem;

    &::before{
        content:open-quote;
        font-size:10rem;
        color:#000;
        position:absolute;
        left:-1rem;
        top:-2rem;
    }
}
p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.4rem;
    font-weight:bold;
    text-align: right;
    color: #666;
    margin-top: 2rem;
}
@media(min-width:992px){
    margin-top:10rem;
}
`
// func
const Frase = ({frase}) => {
    return ( 
    <ContenedorFrase>
        <h1>{frase.quote}</h1>
        <p>-{frase.author}</p>
    </ContenedorFrase>
    );
}
 
export default Frase;