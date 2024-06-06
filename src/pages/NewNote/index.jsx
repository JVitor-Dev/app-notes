import { Container, Form } from "./style";

import { Header } from '../../Components/Header'
import { Input } from '../../Components/Input'
import { TextArea } from '../../Components/TextArea'
import { NoteItem } from '../../Components/NoteItem'
import { Section } from '../../Components/Section'

export function NewNote(){
  return(
    <Container>
      <Header/>

      <main>
        <Form>

          <header>
            <h1>Criar nota</h1>
            <a href="/">voltar</a>
          </header>

          <Input 
          placeholder="Título"
          />

          <TextArea placeholder="Observações"/>

          <Section title="Links úteis">
            <NoteItem value="https://rocketseat.com.br"/>
            <NoteItem isnew='true' placeholder='Novo link'/>
          </Section>
        </Form>
      </main>
    </Container>
  )
}