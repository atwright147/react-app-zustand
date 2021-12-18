import styled from 'styled-components';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string,
}

const StyledButton = styled.button`
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
  gap: .5em;

  user-select: none;

  padding: .5rem 1.5rem;
  border: 0;
  background-color: DarkOrange;
  color: white;

  &:focus {
    box-shadow: 0 0 0 3px #2196F3;
  }
`;

export const Button = ({ label, ...props }: Props) => {
  return (
    <StyledButton {...props}>{label}</StyledButton>
  );
};
