import styled from "styled-components";

const breakpoints = {
  mobile: "425px",
  tablet: "768px",
};

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const IntroConteiner = styled.div`
  display: flex;
  gap: 3.5rem;
  padding: 5.75rem 0;

  @media (max-width: ${breakpoints.mobile}) {
    flex-wrap: wrap;

    img {
      order: 1;
      height: auto;
      max-width: 100%;
    }

    ${Content} {
      order: 2;
    }
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SpanTitle = styled.span`
  font-family: "Baloo 2", sans-serif;
  font-size: 3rem;
  font-weight: bolder;
`;

export const SpanSubTitle = styled.span`
  font-size: 1.25rem;
`;

export const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 colunas */
  grid-template-rows: repeat(2, 1fr); /* 2 linhas */
  gap: 10px;
`;

export const Item = styled.div`
  align-items: center;
  display: flex;
  gap: 0.75rem;
`;
