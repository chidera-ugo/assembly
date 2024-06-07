import { Flex } from "../../styles/commons/Utils.styles";
import { StyledRadioInput } from "./RadioInput.styles";

type Props = {
  value: string;
  handleChange: (value: string) => void;
  options: { value: string; label: string }[];
};

export function RadioInput({
  value,
  handleChange,
  options,
}: Props & JSX.IntrinsicElements["input"]) {
  return (
    <StyledRadioInput $marginTop={20}>
      {options.map(({ value: val, label }) => {
        return (
          <label key={label} htmlFor={label}>
            <Flex $gap={8} $nonResponsive>
              <input
                id={label}
                onChange={() => {
                  handleChange(value === val ? "" : val);
                }}
                checked={value === val}
                type="radio"
              />

              <span>{label}</span>
            </Flex>
          </label>
        );
      })}
    </StyledRadioInput>
  );
}
