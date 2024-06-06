import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from './style'

export function Header(){
  return(
    <Container>
      <Profile to="/profile">
      <img src="https://github.com/JVitor-Dev.png"
          alt="Foto do usuário"
      />

      <div>
        <p>Bem Vindo,</p>
        <strong>João Vitor</strong>
      </div>
      </Profile> 

      <Logout>
        <RiShutDownLine/>
      </Logout>

    </Container>
  )
}