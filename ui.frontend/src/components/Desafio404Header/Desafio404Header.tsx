import React  from "react"

export interface Desafio404HeaderProps {

    title: string;

 } 

 const Desafio404Header = ({

    title,

 }: Desafio404HeaderProps ): JSX.Element => { 
   
   
    return <div>

      <h1> header </h1>

      <h2> {title} </h2>


    </div> ;

 }

 export default Desafio404Header;