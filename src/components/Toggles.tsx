import styled from 'styled-components';
import { useTogglesStore } from '../stores/toggles.store';
import { Checkbox } from './form/Checkbox';
import { Heading } from './Heading';

const StyledBoxContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px 0;
`;

const StyledBox = styled.div`
  --size: 100px;

  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;

  height: var(--size);
  width: var(--size);

  color: white;
  font-weight: bold;
  text-transform: capitalize;
`;

const CapsCheckbox = styled(Checkbox)`
  text-transform: capitalize;
`;

const boxes = [
  'red',
  'red',
  'red',
  'green',
  'green',
  'green',
  'blue',
  'blue',
  'blue',
]

export const Toggles = (): JSX.Element => {
  const { toggles, toggle } = useTogglesStore();

  const handleChange = (color: string): void => toggle(color);

  return (
    <>
      <Heading>Toggles</Heading>

      <div className="toggles">
        {Object.keys(toggles).map((color, index) => (
          <CapsCheckbox
            key={index}
            name={color}
            id={`${color}-${index}`}
            label={color}
            value={color}
            checked={toggles[color]}
            onChange={() => handleChange(color)}
          />
        ))}
      </div>

      <StyledBoxContainer>
        {boxes.filter((color) => toggles[color]).map((color, index) => <StyledBox key={index} style={{ backgroundColor: color }}>{color}</StyledBox>)}
      </StyledBoxContainer>
    </>
  );
};
