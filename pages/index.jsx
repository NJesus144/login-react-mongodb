import { Alert } from "react-bootstrap";
import H2 from "../src/components/Typography/H2";

function HomePage() {
  return (
    <div>
      <Alert className="text-center" variant="success">
        <H2>Ola, seja bem vindo!</H2>
      </Alert>
    </div>
  );
}

export default HomePage;

