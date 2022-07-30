import Container from "react-bootstrap/Container"
import { TodoList } from "../components/TodoApp/TodoList"
import { TodoForm } from "../components/TodoApp/TodoForm"

export const TodoApp: React.FC = () => {
  return (
    <Container className="mt-3">
      <TodoList />
      <TodoForm />
    </Container>
  )
}