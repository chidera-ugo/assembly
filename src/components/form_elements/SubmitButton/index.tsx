import { PropsWithChildren } from "react";
import { Spinner } from "../../commons/Spinner";
import { StyledSubmitButton } from "./SubmitButton.styles";

type Props = {
  submitting: boolean;
};

export function SubmitButton({
  submitting,
  children,
}: PropsWithChildren<Props>) {
  return (
    <StyledSubmitButton disabled={submitting}>
      {submitting ? <Spinner /> : children}
    </StyledSubmitButton>
  );
}
