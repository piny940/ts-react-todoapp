import Form from "react-bootstrap/Form"
import { FormItem } from "./FormItem";
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"

export const TodoForm: React.FC = () => {
  return (
    <Form className="w-75 mx-auto">
      <FormItem label="Todoの内容を入力">
        <Form.Control  />
      </FormItem>
      <FormItem label="優先度を選択">
        <Form.Select>
          <option value="a">あ</option>
        </Form.Select>
      </FormItem>
      <Row>
        <Col md={{span: 3, offset: 9}}>
          <Button variant="primary" className="w-100">作成</Button>
        </Col>
      </Row>
    </Form>
  )
}