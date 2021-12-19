import styled from 'styled-components';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';

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

interface Values {
  description: string,
}

const initialValues: Values = {
  description: '',
}

const validationSchema = yup.object({
  description: yup.string().min(3, 'Should be longer than 3 characters').required('Please enter a description')
});

export const Todos = () => {
  const { add, todos, toggleDone, remove } = useTodoStore();

  const handleChange = (id: Uuid): void => {
    toggleDone(id);
  }

  const handleRemove = (id: Uuid): void => {
    remove(id);
  }

  const handleSubmit = (values: any): void => {
    add(values.description);
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field id="todo-description" name="description" component={TextField} />
          <Button type="submit" label="Add" style={{ marginTop: '.5rem' }} />
        </Form>
      </Formik>
      <div className="todos-container">
        <StyledList>
          {todos && todos.map((todo) => (
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

          {!todos.length && <p>Yay! You have no todos to do&hellip;</p>}
        </StyledList>
      </div>
    </>
  )
};
