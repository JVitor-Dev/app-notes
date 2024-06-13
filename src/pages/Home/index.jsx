import { FiPlus, FiSearch } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote } from './style'

import { ButtonText } from '../../Components/ButtonText'

import{ api } from '../../../../../Stage 08/iniciando-nodejs/src/services/api'
import { useState, useEffect } from 'react'

import { Header } from '../../Components/Header'
import { Input } from '../../Components/Input'
import { Section } from '../../Components/Section'
import { Note } from '../../Components/Note'

export function Home(){
  const [tags, setTags] = useState([])

  useEffect(() => {
    async function handleTags(){
      const response = await api.get('/tags')
      setTags(response.data)
    }

    handleTags()
  },[])

  return(
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>

      <Header/>

      <Menu>
        <li><ButtonText title="Todos" $isActive="true"/></li>
        {
          tags && tags.map(tag => (
            <li><ButtonText key={String(tag.id)} title={tag.name}/></li>
          ))
        }
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