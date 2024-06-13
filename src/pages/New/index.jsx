import { Container, Form } from "./style";
import { Link, useNavigate } from "react-router-dom"
import { api } from '../../../../../Stage 08/iniciando-nodejs/src/services/api'

import { Header } from '../../Components/Header'
import { Input } from '../../Components/Input'
import { Button } from '../../Components/Button'
import { TextArea } from '../../Components/TextArea'
import { NoteItem } from '../../Components/NoteItem'
import { Section } from '../../Components/Section'
import { useState } from "react";

export function New(){
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

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

  const navigate = useNavigate()

  async function handleNewNote(){
    if(!title){
      return alert("Digite o título da nota")
    }

    if(newLink){
      return alert("Você digitou um link porém não salvou, salve o link ou deixei o campo branco.")
    }

    if(newTag){
      return alert("Você digitou uma tag porém não salvou, salve a tag ou deixei o campo branco.")
    }


    await api.post("/notes", {
      title,
      description,
      links,
      tags
    })

    alert("Nota criada com sucesso!")
    navigate("/")
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
            onChange={e => setTitle(e.target.value)}
          />

          <TextArea
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)}
          />

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

          <Button title="Salvar" onClick={handleNewNote}/>
        </Form>
      </main>
    </Container>
  )
}