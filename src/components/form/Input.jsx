import { Form } from "react-bootstrap"


export const Input = ({label, value, ...props}) => {
  return (
    <Form.Group className="mb-3 " controlId="formGroupEmail">
    <Form.Label>{label}</Form.Label>
    <Form.Control
      type="text"
      placeholder={label}
      value={value}
      {...props}
    />
  </Form.Group>
  )
}