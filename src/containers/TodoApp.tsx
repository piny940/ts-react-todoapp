import Container from "react-bootstrap/Container"
import { TodoList } from "../components/TodoApp/TodoList"
import { TodoForm } from "../components/TodoApp/TodoForm"
import { useState } from "react"
import { TodoType } from "../types"

export const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<TodoType[]>([
    { content: "hoge", priority: 3, id: 0}
  ])

  return (
    <Container className="mt-3 w-75">
      <TodoList todos={todos} />
      <TodoForm />
    </Container>
  )
}