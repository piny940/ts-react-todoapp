import { TodoType } from "../../types"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export interface TodoItemProps {
  todo: TodoType
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo
}) => {
  return (
    <Row as="li">
      <Col>{todo.content}</Col>
      <Col xs="auto">{'★'.repeat(todo.priority)}</Col>
    </Row>
  )
}
