import React  from "react"

export interface Desafio404Props {

    title: string;
    text: string;
    button: string;
    image: {src: string}

 } 

 const Desafio404 = ({

    title, text, button, image={src:""}

 }: Desafio404Props ): JSX.Element => { 
   
   console.log({image});

    return <div>

      <h1> {title} </h1>

      <p> {text} </p>

      <button> {button} </button>

      <img src={image.src}/>

    </div> ;

 }

 export default Desafio404;