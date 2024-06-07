import styled from "styled-components";

export const Container = styled.div<{ $paddingY?: number }>`
  max-width: 900px;
  margin: 0 auto;
  padding: 40px;

  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    padding: 20px;
  }
`;
