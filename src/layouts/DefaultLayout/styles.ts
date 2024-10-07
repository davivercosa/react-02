import styled from "styled-components";

const breakpoints = {
  mobile: "425px",
  tablet: "768px",
};

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 10rem;
  margin: 0 auto;
  max-width: 90rem;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 2rem;
  }
`;
