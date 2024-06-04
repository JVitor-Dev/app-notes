import { Container, Links, Content } from "./style"
import { Header } from "../../Components/Header" 
import { ButtonText } from "../../Components/ButtonText" 
import { Section } from "../../Components/Section"
import { Tag } from "../../Components/Tag"
import { Button } from "../../Components/Button" 

export function Details(){
  return(
    <Container>
        <Header/>
      <main>
        <Content>

        <ButtonText title="Excluir a nota"/>

        <h1>Introdução ao React</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt dolorem suscipit quia, eligendi, dignissimos quae minus ab quis reprehenderit soluta eos facere laudantium deserunt aspernatur mollitia! Illum voluptatibus incidunt dolore?
        </p>
        
        <Section title="Links úteis">
          <Links>
          <li><a href="#" target="_blank">Link 01</a></li>
          </Links>
        </Section>

        <Section title="Marcadores">
          <Tag title="express"/>
          <Tag title="node"/>
        </Section>

        <Button title="Voltar"/>
        </Content>
      </main>
    </Container>
  )
}