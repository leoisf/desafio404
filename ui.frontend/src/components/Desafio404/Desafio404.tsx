import React  from "react"
import { Wrapper } from "./Desafio404.styled";

export interface Desafio404Props {

    title: string;
    text: string;
    button: string;
    image: {src: string},

 } 

export const Desafio404EditConfig = {

   emptyLabel: "insira aqui um conteúdo",

   isEmpty: (props: { text: any; }): boolean => !props || !props.text

 }

 const Desafio404 = ({

    title, text, button, image={src:""},

 }: Desafio404Props ): JSX.Element => { 
   
    return <Wrapper>
      <h1> {title} </h1>
      <p> {text} </p>
      <button> {button} </button>
      <img src={image.src}/>
    </Wrapper> ;

 }

 export default Desafio404;