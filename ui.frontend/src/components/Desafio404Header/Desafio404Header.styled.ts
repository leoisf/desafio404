import styled from "styled-components";


export const Wrapper = styled.div`
  display: flex;
  font-family: 'Space Mono';
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Span = styled.span`
  font-family: 'Inconsolata';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 25px;
  text-transform: uppercase;
`;