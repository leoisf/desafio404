import React  from "react"

export interface Desafio404FooterProps {

    title: string;

 } 

 const Desafio404Footer = ({

    title,

 }: Desafio404FooterProps ): JSX.Element => { 
   
   
    return <div>

      <h1> {title} </h1>

      <h2> footer </h2>

    </div> ;

 }

 export default Desafio404Footer;