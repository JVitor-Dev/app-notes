import { FiPlus, FiSearch } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote } from './style'

import { ButtonText } from '../../Components/ButtonText'

import { Header } from '../../Components/Header'
import { Input } from '../../Components/Input'
import { Section } from '../../Components/Section'
import { Note } from '../../Components/Note'

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

      <Content>
        <Section title="Minhas notas">
          <Note data={{
            title: "React",
            tags: [
              {id: '1', name: 'react'},
              {id: '2', name: 'node'}
            ]
            }}/>

        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus/>
        Criar nota
      </NewNote>

    </Container>
  )
}