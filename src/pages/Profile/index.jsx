import {FiArrowLeft, FiUser, FiMail, FiLock} from 'react-icons/fi'

import {Input} from '../../Components/Input'
import {Button} from '../../Components/Button'
import {Container, Form} from './style'

export function Profile(){
  return(
    <Container>
      <header>
        <a href="/home"><FiArrowLeft/></a>
      </header>

      <Form>
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