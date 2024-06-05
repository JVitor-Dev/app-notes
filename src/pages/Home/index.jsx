import { FiPlus, FiSearch } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote } from './style'

import { Header } from '../../Components/Header'
import { ButtonText } from '../../Components/ButtonText'
import { Input } from '../../Components/Input'

export function Home(){
  return(
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>

      <Header/>

      <Menu>
        <li><ButtonText title="Todos" $isActive="false"/></li>
        <li><ButtonText title="Node" /></li>
        <li><ButtonText title="React"/></li>
      </Menu>

      <Search>
        <Input icon={FiSearch} placeholder="Pesquisar pelo título" />
      </Search>

      <Content></Content>

      <NewNote>
        <FiPlus/>
        Criar nota
      </NewNote>

    </Container>
  )
}