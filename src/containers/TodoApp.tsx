import { TodoInput } from "../components/TodoApp/TodoInput"
import { TodoList } from "../components/TodoApp/TodoList"

export const TodoApp: React.FC = () => {
  return (
    <div>
      <TodoInput />
      <TodoList />
    </div>
  )
}