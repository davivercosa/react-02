import styled from "styled-components";

const breakpoints = {
  mobile: "425px",
  tablet: "768px",
};

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 2rem 10rem;
  max-width: calc(90rem - 10rem);

  @media (max-width: ${breakpoints.mobile}) {
    padding: 2rem;
  }
`;
