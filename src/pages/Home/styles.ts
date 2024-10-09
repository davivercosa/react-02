import styled from "styled-components";

const breakpoints = {
  mobile: "425px",
  tablet: "768px",
};

export const HomeContainer = styled.div``;

export const CoffeeList = styled.div``;

export const CoffeeCard = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme["base-card"]};
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 2rem;
  display: flex;
  flex-direction: column;
  height: 310px;
  justify-content: space-between;
  padding: 0 1rem;
  width: 256px;
`;

export const StyledImage = styled.img`
  position: relative;
  top: -1.25rem;
`;

export const Tags = styled.div`
  align-items: center;
  display: flex;
  gap: 0.25rem;
  justify-content: center;
  position: relative;
  top: -1.25rem;
  width: calc(100% - 2rem);
`;

export const Tag = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme["yellow-light"]};
  border-radius: 1rem;
  color: ${(props) => props.theme["yellow-dark"]};
  display: flex;
  justify-content: center;
  padding: 0.25rem 0.5rem;
`;

export const Title = styled.div`
  color: ${(props) => props.theme["base-subtitle"]};
  font-family: "Baloo 2", sans-serif;
  font-size: 1.25rem;
  font-weight: bold;
`;

export const Subtitle = styled.div`
  color: ${(props) => props.theme["base-subtitle"]};
  font-size: 0.9rem;
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
  top: -1.25rem;
  width: calc(100% - 2rem);
`;

export const CoffeeCardFooter = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  position: relative;
  top: -1.25rem;
  width: calc(100% - 2rem);
`;

export const ItemPrice = styled.div`
  color: ${(props) => props.theme["base-text"]};

  span {
    font-weight: bold;
  }
`;

export const Action = styled.div`
  align-items: center;
  display: flex;
  gap: 0.5rem;
  height: 22px;
`;

export const ActionButton = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme["base-button"]};
  border-radius: 6px;
  display: flex;
  gap: 0.25rem;
  justify-content: space-evenly;
  padding: 0.5rem;
`;

export const Cart = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme["purple-dark"]};
  border-radius: 6px;
  display: flex;
  justify-content: center;
  padding: 0.5rem;
`;
