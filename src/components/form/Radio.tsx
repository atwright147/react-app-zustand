import { FieldProps } from 'formik';
import { useState } from 'react';
import styled from 'styled-components';

// interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange' | 'id'> {
//   callback?: (value: any) => void,
//   id: string,
//   label?: string,
// }

type Props = React.InputHTMLAttributes<HTMLInputElement> & FieldProps<string, string> & {
  id: string,
  label: string,
  callback?: (value: any) => void,
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
    background-color: white;
    transition: box-shadow .5s;
    border-radius: 50%;
    border: 2px solid #bbb;
    box-sizing: border-box;
  }

  &:hover input ~ .checkmark {
    background-color: #ccc;
  }

  & input:checked ~ .checkmark {
    /* background-color: #2196F3; */
  }

  & input:focus ~ .checkmark {
    box-shadow: 0 0 0 3px #2196F3;
    z-index: 1;
  }

  .checkmark::after {
    content: "";
    display: none;
    background-color: red;
  }

  & input:checked ~ .checkmark:after {
    display: block;
    background-color: red;
  }

  & .checkmark::after {
    --size: .8em;
    width: var(--size);
    height: var(--size);
    background-color: red;
    border-radius: 50%;
  }
`;

export const Radio = ({ callback, ...props }: Props): JSX.Element => {
  console.info(props);
  const [state, setState] = useState(props.checked ? true : false);
  delete props.checked;

  const handleChange = (): void => {
    setState(!state);
    callback?.(state);
  }

  return (
    <StyledLabel className={props.className}>
      <input type="radio" checked={state} {...props.field} />
      <span className="checkmark"></span>
      {props.label}
    </StyledLabel>
  );
};
