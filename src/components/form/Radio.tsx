import { useField } from 'formik';
import styled from 'styled-components';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
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
    border-radius: 50%;
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
    width:  30%;
    height: 30%;
    background-color: white;
    border-radius: 50%;
  }

  & input:checked ~ .checkmark:after {
    display: block;
  }
`;

export const Radio = ({ name, label, ...props }: Props): JSX.Element => {
  return (
    <StyledLabel className={props.className}>
      <input type="radio" name={name} {...props} />
      <span className="checkmark"></span>
      {label}
    </StyledLabel>
  );
};

export const FormikRadio = ({ name, label, ...props }: Props): JSX.Element => {
  // value required for radio type: https://github.com/final-form/react-final-form/issues/772
  const [field, meta] = useField({ name, type: 'radio', value: props.value });

  return (
    <Radio
      label={label}
      {...field}
      {...props}
    />
  );
}
