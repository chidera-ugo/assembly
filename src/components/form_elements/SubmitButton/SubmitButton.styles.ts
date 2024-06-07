import styled from "styled-components";

export const StyledSubmitButton = styled.button`
  border-radius: 10px;
  padding: 12px 20px;
  border: none;
  height: 60px;
  color: #ffffff;
  background-color: ${({ theme }) => theme.colors.green["900"]};
  flex-shrink: 0;
  width: 200px;
  font-size: 16px;
  font-weight: 600;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.6;
  }

  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    width: 100%;
  }
`;
