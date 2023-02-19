import styles from "./Container.module.css";
import { Container } from "react-bootstrap";

import Form from "react-bootstrap/Form";

export const ContainerForm = ({ children, onSubmit }) => {
  return (
    <Container className={styles.containerEdit}>
      <Form className={styles.form} onSubmit={onSubmit}>
        {children}
      </Form>
    </Container>
  );
};
