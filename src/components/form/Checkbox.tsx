import { useField } from 'formik';
import styled from 'styled-components';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  id: string,
  label: string,
  name: string,
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
    z-index: 1;
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

export const Checkbox = ({ name, label, ...props }: Props): JSX.Element => {
  return (
    <StyledLabel className={props.className}>
      <input type="checkbox" {...props} />
      <span className="checkmark"></span>
      {label}
    </StyledLabel>
  );
};

export const FormikCheckbox = ({ name, label, ...props }: Props): JSX.Element => {
  const [field, meta] = useField({ name, type: 'checkbox' });

  return (
    <Checkbox
      label={label}
      {...field}
      {...props}
    />
  );
}
