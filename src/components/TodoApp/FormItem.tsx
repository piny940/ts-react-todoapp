import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { ReactNode } from "react"

export interface FormItemProps {
  label: string
  children: ReactNode
  my?: number
}

export const FormItem: React.FC<FormItemProps> = ({
  label,
  children,
  my=2,
}) => {
  return (
    <Form.Group className={`my-${my}`} as= { Row } controlId = "input" >
      <Form.Label column md={3}>{label}</Form.Label>
      <Col md={9}>
        {children}
      </Col>
    </Form.Group >
  )
}