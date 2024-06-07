import styled from "styled-components";

export const StyledInput = styled.input`
  border-radius: 10px;
  padding: 12px 20px;
  display: block;
  height: 60px;
  background-color: #ffffff;
  border: 4px solid ${({ theme }) => theme.colors.neutral[200]};
  width: 100%;
  font-size: 16px;
  font-weight: 600;

  &:focus {
    outline: none;
    border: 4px solid ${({ theme }) => theme.colors.green[500]};
  }
`;
