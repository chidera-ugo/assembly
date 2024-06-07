import styled from "styled-components";
import { Flex } from "../../styles/commons/Utils.styles";

export const StyledRadioInput = styled(Flex).attrs({
  $nonResponsive: true,
})`
  margin-top: 20px;
  border-radius: 0px;

  & input {
    margin: 0;
    height: 20px;
    width: 20px;

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      height: 14px;
      width: 14px;
    }
  }

  & span {
    font-size: 16px;

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      font-size: 14px;
    }
  }
`;
