import styled from 'styled-components';
import { Field } from 'formik';

interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'id' | 'name'> {
  id: string,
  name: string,
  label: string,
  onChange: (value: any) => void,
  value: string,
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

export const TextField = ({ ...props }) => {
  console.info(props);
  return (
    <StyledContainer>
      <Field {...props} />
      {/* <ErrorMessage name={props.name} /> */}
      <label htmlFor={props.id}>{props.label}</label>
    </StyledContainer>
  );
};
