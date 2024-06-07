import styled from "styled-components";
import { XBetween, YCenter } from "../../styles/commons/Utils.styles";

export const StyledProfileCard = styled(XBetween)`
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.neutral[100]};
  padding: 20px;
  margin-bottom: 20px;

  &:hover {
    border-color: ${({ theme }) => theme.colors.green[200]};
  }

  h5 {
    margin: 0;
  }

  a {
    display: block;
    font-size: 14px;
    padding: 7px;
    margin-top: 4px;
    margin-left: -7px;
    color: black;
    font-weight: 600;
    text-underline-offset: 4px;

    &:hover {
      color: ${({ theme }) => theme.colors.green[500]};
    }
  }
`;

export const Avatar = styled.img`
  border-radius: 100%;
  object-fit: contain;
  height: 60px;
  width: 60px;
`;

export const Badge = styled(YCenter) <{ $isUser?: boolean }>`
  border-radius: 12px;
  padding: 6px 8px;
  font-weight: 600;
  font-size: 12px;
  width: fit-content;
  margin-top: 8px;
  background-color: ${({ $isUser, theme }) =>
    !$isUser ? "maroon" : theme.colors.green[500]};
  color: white;
`;
