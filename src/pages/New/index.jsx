import { Container, Form } from "./style";
import { Link } from "react-router-dom"

import { Header } from '../../Components/Header'
import { Input } from '../../Components/Input'
import { Button } from '../../Components/Button'
import { TextArea } from '../../Components/TextArea'
import { NoteItem } from '../../Components/NoteItem'
import { Section } from '../../Components/Section'
import { useState } from "react";

export function New(){

  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState()

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState()


  function handleAddLinks(){
    setLinks(prevLinks => [...prevLinks, newLink])
    setNewLink('')
  }

  function handleRemoveLink(deleted){
    setLinks(prevState => prevState.filter(link => link !== deleted))
  }

  function handleAddTag(){
    setTags(prevTags => [...prevTags, newTag])
    setNewTag('')
  }

  function handleRemoveTag(deleted){
    setTags(prevTags => prevTags.filter(tag => tag !== deleted))
  }

  return(
    <Container>
      <Header/>

      <main>
        <Form>

          <header>
            <h1>Criar nota</h1>
            <Link to="/">voltar</Link>
          </header>

          <Input 
          placeholder="Título"
          />

          <TextArea placeholder="Observações"/>

          <Section title="Links úteis">
            {
              links.map((link, index) => (
                <NoteItem
                key={String(index)}
                value={link}
                OnClick={() => handleRemoveLink(link)}
              />
              ))
            }
            <NoteItem isnew='true'
              placeholder='Novo link'
              value={newLink}
              onChange={e => setNewLink(e.target.value)}
              OnClick={handleAddLinks}
              />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              {
                tags.map((tag, index) => (
                  <NoteItem
                  key={String(index)}
                  value={tag}
                  OnClick={() => {handleRemoveTag(tag)}}
                  />))
              }

              <NoteItem
                isnew='true' 
                placeholder='Nova Tag'
                onChange={e => setNewTag(e.target.value)}
                value={newTag}
                OnClick={handleAddTag}
              />
            </div>
          </Section>

          <Button title="Salvar"/>
        </Form>
      </main>
    </Container>
  )
}