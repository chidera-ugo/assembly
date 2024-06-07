import styled from "styled-components";
import { animate_spin } from "../../styles/commons/Animations.styles";

export const StyledSpinner = styled.svg`
  animation: ${animate_spin} infinite 2s linear;
`;
