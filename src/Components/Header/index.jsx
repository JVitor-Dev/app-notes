import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from './style'

import { useAuth } from '../../hooks/auth'

export function Header(){
  const { signOut, user } = useAuth()

  return(
    <Container>
      <Profile to="/profile">
      <img src="https://github.com/JVitor-Dev.png"
          alt="Foto do usuário"
      />

      <div>
        <p>Bem Vindo,</p>
        <strong>{user.name}</strong>
      </div>
      </Profile> 

      <Logout onClick={signOut}>
        <RiShutDownLine/>
      </Logout>

    </Container>
  )
}