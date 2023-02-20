import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import axios from "axios";
import { useRouter } from "next/router";

import Link from "next/link";
import { loginSchema } from "../modules/user/user.schema";

import { Input } from "../src/components/form/Input";
import H1 from "../src/components/Typography/H1";
import { ContainerForm } from "../src/components/layout/ContainerForm";
import { Btn } from "../src/components/button/Btn";

function Login() {
  const router = useRouter()
  const { register, handleSubmit, formState: { errors }, setError } = useForm({
    resolver: joiResolver(loginSchema),
  });

  const handleForm = async (data) => {
    try{
      const { status } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/user/login`, data)
      if (status === 200) {
        router.push('/')
      }
    }catch({response}){
     if(response.data === 'password incorrect') {
      setError('password', {
        message: 'A senha está incorreta.'
      })
     }
     else if (response.data === 'not found'){
      setError('userOrEmail',{
        message: 'Usuário ou e-mail não encontrado.'
      })
     }
    }
  };

  return (
    <ContainerForm onSubmit={handleSubmit(handleForm)}>
      <H1>Login</H1>
      <Input
        type="text"   
        placeholder="Usuário"
        {...register("userOrEmail")} error={errors.userOrEmail}
      />
      <Input
        type="text"
        placeholder="Senha"
        {...register("password")} error={errors.password}
      />
      <Btn type="submit">Entrar</Btn>
      <p className="text-center mt-2">Ainda não possui uma conta?<Link href="/signup"> Cadastre-se</Link></p>
    </ContainerForm>
  );
}

export default Login;
