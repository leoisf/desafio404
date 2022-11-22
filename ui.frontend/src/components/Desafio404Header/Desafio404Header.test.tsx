import * as React from 'react';

import { render, screen } from '@testing-library/react';


import "@testing-library/jest-dom";
import Desafio404Header from './Desafio404Header';

describe( "título", () => {

const title = "404 not found";

render(<Desafio404Header title={title}></Desafio404Header>)

test("teste de título renders text", () =>{
    expect(screen.getByText(title)).toBeInTheDocument()
})

}
);