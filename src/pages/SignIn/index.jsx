import {FiMail, FiLock } from "react-icons/fi"
import { Link } from "react-router-dom"
import {Input} from "../../Components/Input"
import {Button} from "../../Components/Button"

import { Container, Form, Background } from "./style"

import { useAuth } from "../../hooks/auth"

export function SignIn(){

  const context = useAuth()
  console.log("meu contexto => ", context)

  return(
    <Container>
      <Form>
      <h1>Rocket Notes</h1>
      <p>Aplicação para salvar e gerenciar seus links úteis.</p>
      <h2>Faça seu login</h2>

      <Input 
        placeholder="E-mail"
        type="text"
        icon={FiMail}
      />
      
      <Input 
        placeholder="Senha"
        type="password"
        icon={FiLock}
      />

      <Button title="Entrar" />

      <Link to="/register">Criar conta</Link>
      </Form>

      <Background/>
    </Container>
  )
}