import styled from 'styled-components';
import { ErrorMessage } from 'formik';

// TODO: figure out Formik Field props
// interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'id' | 'name'> {
//   id: string,
//   val: string,
//   name: string,
//   label: string,
//   handleOnChange: (value: any) => void,
// }

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

export const TextField = ({ ...props }): JSX.Element => {
  return (
    <StyledContainer className={props.className}>
      <input {...props.field} />
      <ErrorMessage name={props.field.name} />
      <label htmlFor={props.id}>{props.label}</label>
    </StyledContainer>
  );
};
