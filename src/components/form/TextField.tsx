import { useState } from 'react';
import styled from 'styled-components';

interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'id'> {
  id: string,
  label: string,
  onChange: (value: any) => void,
  value: string,
}

const StyledLabel = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
  gap: .5em;

  label {
    user-select: none;
  }

  input {
    padding: .5rem;
    border: 1px solid LightGrey;
    border-radius: .25rem;
  }

  input:focus {
    box-shadow: 0 0 0 3px #2196F3;
  }
`;

type InputValue = React.InputHTMLAttributes<HTMLInputElement>['value'];
type BooleanOrUndefined = boolean | undefined;
const trueOrEmpty = (value: string | number | boolean): BooleanOrUndefined => value ? true : undefined;
const stringToBool = (value: string): boolean => value === 'true' ? true : false;

export const TextField = ({ label, onChange, value, ...props }: Props) => {
  const [_value, setValue] = useState(value);

  const handleChange = () => {
    setValue(_value);
    onChange(_value);
  }

  return (
    <StyledLabel>
      <input value={trueOrEmpty(_value) as InputValue} onChange={handleChange} {...props} />
      <label htmlFor={props.id}>{label}</label>
    </StyledLabel>
  );
};
