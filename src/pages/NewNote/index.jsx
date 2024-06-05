import { Container, Form } from "./style";

import { Header } from '../../Components/Header'
import { Input } from '../../Components/Input'
import { TextArea } from '../../Components/TextArea'

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
        </Form>
      </main>
    </Container>
  )
}