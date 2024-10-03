import styled from "styled-components";

const breakpoints = {
  mobile: "425px",
  tablet: "768px",
};

export const HomeContainer = styled.div`
  padding: 5.75rem 0;
`;

export const InfoContent = styled.div`
  align-items: flex-start;
  display: flex;
  gap: 3.5rem;

  @media (max-width: ${breakpoints.mobile}) {
    img {
      display: none;
    }
  }
`;

export const InfoTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-family: "Baloo 2", sans-serif;
    font-size: 3rem;
    font-weight: bolder;
  }

  span {
    font-size: 1.25rem;
  }
`;

export const InfoItemsContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const InfoItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Item = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;
