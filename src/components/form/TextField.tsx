import styled from 'styled-components';
import { useField } from 'formik';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  id: string,
  label: string,
  name: string,
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
  gap: .5em;
  margin: 15px 0;

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

// export const TextField = ({ id, label, callback, ...props }: Props): JSX.Element => {
//   const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
//     props.field?.onChange(event);
//     callback?.(event);
//   }

//   return (
//     <StyledContainer className={props.className}>
//       <ErrorMessage name={props.field.name} />
//       <input id={id} {...props.field} onChange={handleChange} />
//       <label htmlFor={id}>{label}</label>
//     </StyledContainer>
//   );
// };

export const TextField = ({ name, id, label, ...props }: Props): JSX.Element => {
  return (
    <StyledContainer className={props.className}>
      <input type="text" id={id} name={name} {...props} />
      <label htmlFor={id}>{label}</label>
    </StyledContainer>
  );
}

export const FormikTextField = ({ name, id, label, ...props }: Props): JSX.Element => {
  const [field] = useField(name);

  return (
    <TextField
      className={props.className}
      label={label}
      id={id}
      {...field}
      {...props}
    />
  );
}

