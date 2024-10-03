import styled from "styled-components";

export const HomeContainer = styled.div`
  padding: 5.75rem 0;
`;

export const InfoContent = styled.div`
  align-items: flex-start;
  display: flex;
  gap: 3.5rem;
  justify-content: center;
`;

export const InfoTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 36.75rem;

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
  width: 35.438rem;
`;

export const InfoItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Item = styled.div`
  align-items: center;
  display: flex;
  gap: 0.75rem;
`;
