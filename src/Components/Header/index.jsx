import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from './style'

import { useAuth } from '../../hooks/auth'

import { api } from '../../services/api'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

export function Header(){
  const { signOut, user } = useAuth()

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  return(
    <Container>
      <Profile to="/profile">
      <img src={avatarURL}
          alt={user.name}
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