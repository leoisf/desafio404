import React  from "react"
import { Wrapper, Image, H1, P, Button, WrapperInfo, GlobalStyle } from "./Desafio404.styled";

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
   
    return<>
    <GlobalStyle/>
    <Wrapper>
      <Image src={image.src}/>
      <WrapperInfo>
         <H1> {title} </H1>
         <P> {text} </P>
         <Button> {button} </Button>
      </WrapperInfo>
    </Wrapper>
    </>
 }

 export default Desafio404;