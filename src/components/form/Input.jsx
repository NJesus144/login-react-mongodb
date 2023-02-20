import { forwardRef } from "react";
import { Form } from "react-bootstrap";

export const Input = forwardRef(({ label, ...props }, ref) => {
  return (
    <Form.Group className="mb-3 " controlId="formGroupEmail">
      <Form.Label>{label}</Form.Label>
      <Form.Control type="text" placeholder={label} {...props} ref={ref} />
    </Form.Group>
  );
});
