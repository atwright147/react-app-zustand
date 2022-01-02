import styled from 'styled-components';
import { useField } from 'formik';

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
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

  textarea {
    display: block;
    padding: .5rem;
    border: 1px solid LightGrey;
    border-radius: .25rem;
    box-sizing: border-box;
    width: 100%;
  }

  textarea:focus {
    box-shadow: 0 0 0 3px #2196F3;
  }
`;

export const Textarea = ({ name, id, label, ...props }: Props): JSX.Element => {
  return (
    <StyledContainer className={props.className}>
      <textarea id={id} name={name} {...props}>{props.value}</textarea>
      <label htmlFor={id}>{label}</label>
    </StyledContainer>
  );
}

export const FormikTextarea = ({ name, id, label, ...props }: Props): JSX.Element => {
  const [field] = useField(name);

  return (
    <Textarea
      className={props.className}
      label={label}
      id={id}
      {...field}
      {...props}
    />
  );
}

