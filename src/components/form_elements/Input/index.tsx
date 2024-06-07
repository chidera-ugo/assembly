import { StyledInput } from "./Input.styles";

type Props = {
  value: string;
  handleChange: (value: string) => void;
};

export function Input({
  value,
  handleChange,
  ...props
}: Props & JSX.IntrinsicElements["input"]) {
  return (
    <StyledInput
      {...props}
      value={value}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
}
