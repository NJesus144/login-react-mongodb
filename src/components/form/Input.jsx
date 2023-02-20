import { forwardRef } from "react";
import { Form } from "react-bootstrap";
import { Alert } from "react-bootstrap";


const errorMessage = {
  'string.empty': "O campo é obrigadtório.",
  'string.email': "Por favor, digite um email válido."
}

export const Input = forwardRef(({ label, error, ...props }, ref) => {
  console.log(error)
  return (
    <Form.Group className="mb-3 " controlId="formGroupEmail">
      <Form.Label>{label}</Form.Label>
      <Form.Control type="text" placeholder={label} {...props} ref={ref} />
  
      {error && 
       <Alert variant="danger" className="mt-1 p-1">
      {errorMessage[error.type] || error.message}
      </Alert>
      }
    </Form.Group>
  );
});
