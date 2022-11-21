import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    html, body {
      margin:0;
      padding:0
    }
    .page{
      max-width: 100%;
    }
  }
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  font-family: 'Space Mono';
  align-items: center;
  min-height: 90vh;
  @media (max-width: 920px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const Image = styled.img`
  width: 539.22px;
  height: 447.43px;
  @media (max-width: 768px) {
    width: 286.83px;
    height: 238px;
  }
`;

export const H1 = styled.h1`
  font-family: 'Space Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 95px;
  letter-spacing: -0.035em;
  @media (max-width: 768px) {
    font-size: 48px;
    line-height: 71px;
    letter-spacing: -0.035em;
    width: 350px;
  }
`;

export const P = styled.p`
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: -0.035em;
  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 27px;
    letter-spacing: -0.035em;
    width: 350px;
  }
`;

export const Button = styled.button`
  margin-top: 42px;
  font-size: 14px;
  width: 216px;
  height: 68px;
  color: white;
  background: #333333;
`;

export const WrapperInfo = styled.div`
  width: 586px;
  min-width: 370px;
  @media (max-width: 768px) {
    width: 370px;
    min-width: 370px;
  }
`;



