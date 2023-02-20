import { useState } from "react";
import Link from "next/link";

import { Input } from "../src/components/form/Input";
import H1 from "../src/components/Typography/H1";
import { ContainerForm } from "../src/components/layout/ContainerForm";
import { Btn } from "../src/components/button/Btn";

function Login() {
  const [user, setUser] = useState();
  const [password, setPassword] = useState();

  const handleForm = (event) => {
    event.preventDefault();
  };

  return (
    <ContainerForm onSubmit={handleForm}>
      <H1>Login</H1>
      <Input
        type="text"
        value={user}
        placeholder="Usuário"
        onChange={({ target }) => setUser(target.value)}
      />
      <Input
        type="text"
        value={password}
        placeholder="Senha"
        onChange={({ target }) => setPassword(target.value)}
      />
      <Btn type="submit">Entrar</Btn>
      <p className="text-center mt-2">Ainda não possui uma conta?<Link href="/signup"> Cadastre-se</Link></p>
    </ContainerForm>
  );
}

export default Login;
