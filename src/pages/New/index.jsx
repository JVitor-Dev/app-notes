import { Container, Form } from "./style";
import { Link } from "react-router-dom"

import { Header } from '../../Components/Header'
import { Input } from '../../Components/Input'
import { Button } from '../../Components/Button'
import { TextArea } from '../../Components/TextArea'
import { NoteItem } from '../../Components/NoteItem'
import { Section } from '../../Components/Section'

export function New(){
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
            <NoteItem value="https://rocketseat.com.br"/>
            <NoteItem isnew='true' placeholder='Novo link'/>
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="react"/>
              <NoteItem isnew='true' placeholder='Nova Tag'/>
            </div>
          </Section>

          <Button title="Salvar"/>
        </Form>
      </main>
    </Container>
  )
}