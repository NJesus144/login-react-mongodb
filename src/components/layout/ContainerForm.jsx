import styles from "./Container.module.css";
import { Container } from "react-bootstrap";

import Form from "react-bootstrap/Form";

export const ContainerForm = ({ children }) => {
  return (
    <Container className={styles.containerEdit}>
      <Form className={styles.form}>{children}</Form>
    </Container>
  );
};
