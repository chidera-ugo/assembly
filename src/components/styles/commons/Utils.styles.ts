import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

export const Flex = styled.div<{
  $marginTop?: number;
  $withBorder?: boolean;
  $gap?: number;
  $nonResponsive?: boolean;
}>`
  display: flex;
  align-items: center;
  gap: ${({ $gap = 20 }) => $gap}px;
  margin-top: ${({ $marginTop }) => $marginTop}px;
  border-radius: 12px;
  border: ${({ $withBorder, theme }) =>
    !$withBorder ? "" : `1px solid ${theme.colors.neutral[200]}`};
  padding: ${({ $withBorder }) => (!$withBorder ? "" : `80px 40px`)};

  & > div,
  & > ul {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    flex-direction: ${({ $nonResponsive }) =>
    $nonResponsive ? "row" : "column"};
    text-align: center;
  }
`;

export const XBetween = styled(Flex)`
  justify-content: space-between;
`;

export const YBetween = styled(XBetween)`
  flex-direction: column;
`;

export const XCenter = styled(Flex)`
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const YCenter = styled(YBetween)`
  align-items: center;
`;

export const Spacer = styled.div`
  height: 20px;
`;
