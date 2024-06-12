import {FiArrowLeft, FiUser, FiMail, FiLock, FiCamera} from 'react-icons/fi'
import { Link } from "react-router-dom"
import {Input} from '../../Components/Input'
import {Button} from '../../Components/Button'
import {Container, Form, Avatar} from './style'
import { useState } from 'react'
import { useAuth } from "../../hooks/auth"

export function Profile(){
  const { user } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState()
  const [passwordNew, setPasswordNew] = useState()

  return(
    <Container>
      <header>
        <Link to="/"><FiArrowLeft/></Link>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/JVitor-Dev.png" alt="Foto do usuário" />

          <label htmlFor="avatar">
            <FiCamera/>

            <input id="avatar" type="file"/>
          </label>
        </Avatar>

        <Input 
        placeholder="Nome"
        type="text"
        icon={FiUser}
        value={name}
        />
        <Input 
        placeholder="Email"
        type="text"
        icon={FiMail}
        value={email}
        />
        <Input 
        placeholder="Senha Atual"
        type="password"
        icon={FiLock}
        onChange={e => setPasswordOld(e.target.value)}
        />
        <Input 
        placeholder="Nova Senha"
        type="password"
        icon={FiLock}
        onChange={e => setPasswordNew(e.target.value)}
        />
        <Button title="Salvar"/>
      </Form>

    </Container>
  )
}