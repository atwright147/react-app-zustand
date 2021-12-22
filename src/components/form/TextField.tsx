import styled from 'styled-components';
import { ErrorMessage } from 'formik';
import { FieldProps } from 'formik';
import { ChangeEvent } from 'react';

type Props = React.InputHTMLAttributes<HTMLInputElement> & FieldProps<string, string> & {
  id: string,
  label: string,
  callback: (value: any) => void,
}

const StyledContainer = styled.div`
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

export const TextField = ({ id, label, callback, onChange, ...props }: Props): JSX.Element => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    callback?.(event);
  }

  return (
    <StyledContainer className={props.className}>
      <ErrorMessage name={props.field.name} />
      <input id={id} {...props.field} onChange={handleChange} />
      <label htmlFor={id}>{label}</label>
    </StyledContainer>
  );
};
