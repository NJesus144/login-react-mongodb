import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { signupSchema } from "../modules/user/user.schema";

import { Input } from "../src/components/form/Input";
import { ContainerForm } from "../src/components/layout/ContainerForm";
import H1 from "../src/components/Typography/H1";
import { Btn } from "../src/components/button/Btn";
import { object } from "joi";

function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: joiResolver(signupSchema),
  });

  const handleForm = (data) => {
    console.log(data);
  };


  return (
    <ContainerForm onSubmit={handleSubmit(handleForm)}>
      <H1>Cadastro</H1>
      <Input type="text" placeholder="Nome" {...register("name")} error={errors.name}/>
      <Input type="text" placeholder="Usuário" {...register("user")} error={errors.user}/>
      <Input type="email" placeholder="Email" {...register("email")} error={errors.email}/>
      <Input type="password" placeholder="Senha" {...register("password")} error={errors.password}/>
      <Btn type="submit">Cadastrar</Btn>
    </ContainerForm>
  );
}

export default Signup;
