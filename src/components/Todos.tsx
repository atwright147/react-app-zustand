import { useTodoStore } from '../stores/todos.store';
import { Checkbox } from './form/Checkbox';

export const Todos = () => {
  const { todos, toggleDone, remove } = useTodoStore();

  const handleChange = (id: string) => {
    toggleDone(id);
  }

  const handleRemove = (id: string) => {
    remove(id);
  }

  return (
    <div className="todos-container">
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span className="description">{todo.description}</span>
            <span className="status">
              <Checkbox label="Done" value={todo.done} onChange={() => handleChange(todo.id)} />
            </span>
            <button type="button" onClick={() => handleRemove(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>

      <pre>{JSON.stringify(todos, null, 4)}</pre>
    </div>
  )
};
