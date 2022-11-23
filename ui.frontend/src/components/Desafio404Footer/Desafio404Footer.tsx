import React  from "react"
import { Span, Wrapper } from "./Desafio404Footer.styled";

export interface Desafio404FooterProps {

    title: string;

 } 

 const Desafio404Footer = ({

    title="Insira um texto",

 }: Desafio404FooterProps ): JSX.Element => { 
   

   return <div>
   <Wrapper>
       <Span> {title} </Span>
   </Wrapper>
 </div> ;

 }

 export default Desafio404Footer;