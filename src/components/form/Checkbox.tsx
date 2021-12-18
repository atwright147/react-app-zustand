import { useState } from 'react';
import styled from 'styled-components';

interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'value' | 'onChange' | 'id'> {
  id: string,
  label?: string,
  onChange: (value: any) => void,
  value: boolean,
}

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  gap: .5em;
  position: relative;
  cursor: pointer;
  user-select: none;

  & input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    --size: 1.6em;
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--size);
    width: var(--size);
    background-color: #eee;
    transition: box-shadow .5s;
  }

  &:hover input ~ .checkmark {
    background-color: #ccc;
  }

  & input:checked ~ .checkmark {
    background-color: #2196F3;
  }

  & input:focus ~ .checkmark {
    box-shadow: 0 0 0 3px #2196F3;
  }

  .checkmark::after {
    content: "";
    display: none;
    margin-top: -.05em;
  }

  & input:checked ~ .checkmark:after {
    display: block;
  }

  & .checkmark::after {
    width: .25em;
    height: .5em;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`;

type InputValue = React.InputHTMLAttributes<HTMLInputElement>['value'];
type BooleanOrUndefined = boolean | undefined;
const trueOrEmpty = (value: string | number | boolean): BooleanOrUndefined => value ? true : undefined;

export const Checkbox = ({ label, onChange, value, ...props }: Props) => {
  const [_value, setValue] = useState(value);

  const handleChange = (): void => {
    setValue(!_value);
    onChange(_value);
  }

  return (
    <StyledLabel>
      <input type="checkbox" value={trueOrEmpty(_value) as InputValue} checked={_value} onChange={handleChange} {...props} />
      <span className="checkmark"></span>
      {label}
    </StyledLabel>
  );
};
