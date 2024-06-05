import {FiArrowLeft, FiUser, FiMail, FiLock, FiCamera} from 'react-icons/fi'

import {Input} from '../../Components/Input'
import {Button} from '../../Components/Button'
import {Container, Form, Avatar} from './style'

export function Profile(){
  return(
    <Container>
      <header>
        <a href="/home"><FiCamera/></a>
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
        />
        <Input 
        placeholder="Email"
        type="text"
        icon={FiMail}
        />
        <Input 
        placeholder="Senha Atual"
        type="password"
        icon={FiLock}
        />
        <Input 
        placeholder="Nova Senha"
        type="password"
        icon={FiLock}
        />
        <Button title="Salvar"/>
      </Form>

    </Container>
  )
}