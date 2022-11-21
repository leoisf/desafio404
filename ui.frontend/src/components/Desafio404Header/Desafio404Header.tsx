import React  from "react"
import { Span, Wrapper } from "./Desafio404Header.styled";


export interface Desafio404HeaderProps {

    title: string;

 } 

 const Desafio404Header = ({

    title,

 }: Desafio404HeaderProps ): JSX.Element => { 
    return <div>
      <Wrapper>
          <Span> {title} </Span>
      </Wrapper>
    </div> ;
 }

 export default Desafio404Header;