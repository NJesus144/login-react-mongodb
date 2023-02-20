import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";


import { joiResolver } from "@hookform/resolvers/joi";
import { signupSchema } from "../modules/user/user.schema";

import { Input } from "../src/components/form/Input";
import { ContainerForm } from "../src/components/layout/ContainerForm";
import H1 from "../src/components/Typography/H1";
import { Btn } from "../src/components/button/Btn";


function Signup() {
  const router = useRouter()
  const { register, handleSubmit, formState: { errors }, setError } = useForm({
    resolver: joiResolver(signupSchema),
  });

  const handleForm = async (data) => {
    try{
      const { status } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/user/signup`, data)
      if (status === 201) {
        router.push('/')
      }
    }catch(err){
      if(err.response.data.code === 11000) {
        setError(err.response.data.duplicatedKey, {
          type: 'duplicated'
        })
      }
    }
  };


  return (
    <ContainerForm onSubmit={handleSubmit(handleForm)}>
      <H1>Cadastro</H1>
      <Input type="text" placeholder="Nome" {...register("name")} error={errors.name}/>
      <Input type="text" placeholder="Usuário" {...register("user")} error={errors.user}/>
      <Input type="email" placeholder="Email" {...register("email")} error={errors.email}/>
      <Input type="password" placeholder="Senha" {...register("password")} error={errors.password}/>
      <Btn type="submit">Cadastrar</Btn>
      <p className="text-center mt-2">Já possui uma conta? Faça login <Link href="/login">aqui</Link></p>
    </ContainerForm>
  );
}

export default Signup;
