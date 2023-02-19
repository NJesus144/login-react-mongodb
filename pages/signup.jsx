import { Input } from "../src/components/form/Input";
import { useState } from "react";
import { ContainerForm } from "../src/components/layout/ContainerForm";
import H1 from "../src/components/Typography/H1";
import { Btn } from "../src/components/button/Btn";

function Signup() {
  const [name, setName] = useState("");
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
      <ContainerForm>
      <H1>Cadastro</H1>
        <Input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
        <Input
          type="text"
          placeholder="Usuário"
          value={user}
          onChange={({ target }) => setUser(target.value)}
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <Btn>Cadastrar</Btn>
      </ContainerForm> 
  );
}

export default Signup;
