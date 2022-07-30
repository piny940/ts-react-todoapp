import { TodoType } from "../../types"
import { TodoItem } from "./TodoItem"

export interface TodoListProps {
  todos: TodoType[]
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
}) => {
  return (
    <>
      <h3>
        TODO
      </h3>
      <ul>
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id}/>
        ))}
      </ul>
    </>
  )
}
