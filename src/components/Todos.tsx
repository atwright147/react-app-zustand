import styled from 'styled-components';
import { useTodoStore } from '../stores/todos.store';
import { Uuid } from '../types/uuid.type';
import { Button } from './form/Button';
import { Checkbox } from './form/Checkbox';
import { TextField } from './form/TextField';

const StyledList = styled.ul`
  display: table;
  margin: 0;
  padding: 0;
`;

const StyledListItem = styled.li`
  display: table-row;
`;

const StyledListContent = styled.div`
  display: table-cell;
  vertical-align: middle;
  padding: .2rem;
`;

const StyledButton = styled.button`
  user-select: none;
  cursor: pointer;

  padding: .35rem 1.25rem;
  border: LightGrey;

  &:focus {
    box-shadow: 0 0 0 3px #2196F3;
  }
`;

const StyledForm = styled.form`
  padding: 1rem 0;
`;

export const Todos = () => {
  const { todos, toggleDone, remove } = useTodoStore();

  const handleChange = (id: Uuid): void => {
    toggleDone(id);
  }

  const handleRemove = (id: Uuid): void => {
    remove(id);
  }

  const handleSubmit = (event: React.SyntheticEvent): void => {
    console.info(event);
    event.preventDefault();
    console.info('here');
  }

  const handleFieldChange = (event: any): void => {
    console.info(event);
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit} className="todo-form">
        <TextField id="todo-description" label="Description" value="" onChange={handleFieldChange} />

        <Button label="Add" style={{ marginTop: '.5rem' }} />
      </StyledForm>

      <div className="todos-container">
        <StyledList>
          {todos.map((todo) => (
            <StyledListItem key={todo.id}>
              <StyledListContent>{todo.description}</StyledListContent>
              <StyledListContent>
                <Checkbox id={todo.id} aria-label="Done" value={todo.done} onChange={() => handleChange(todo.id)} />
              </StyledListContent>
              <StyledListContent>
                <StyledButton type="button" onClick={() => handleRemove(todo.id)}>Remove</StyledButton>
              </StyledListContent>
            </StyledListItem>
          ))}
        </StyledList>

        <pre>{JSON.stringify(todos, null, 4)}</pre>
      </div>
    </>
  )
};
