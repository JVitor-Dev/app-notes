import { Container, Links, Content } from "./style"
import { Header } from "../../Components/Header" 
import { ButtonText } from "../../Components/ButtonText" 
import { Section } from "../../Components/Section"
import { Tag } from "../../Components/Tag"
import { Button } from "../../Components/Button" 

import { useState, useEffect } from 'react'
import { api } from '../../services/api'
import { useNavigate, useParams } from "react-router-dom"

export function Details(){
  const [data, setData] = useState(null)
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchNote(){
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }

    fetchNote()
  }, [])

  function handleBack(){
    navigate(-1)
  }

  function handleDeleteNote(){
    const confirm = window.confirm("Tem certeza que deseja excluir essa nota?")

    if(confirm){
      api.delete(`/notes/${params.id}`)
      navigate(-1)
    }
  }

  return(
    <Container>
        <Header/>
        { data &&
          <main>
            <Content>

            <ButtonText title="Excluir a nota" onClick={handleDeleteNote}/>

            <h1>{data.title}</h1>
            <p>
              {data.description}
            </p>

            {
              data.links &&
              <Section title="Links úteis">
                {
                  data.links.map(link => (
                    <Links key={link.id}>
                      <li>
                        <a href={link.url} target="_blank">{link.url}</a>
                      </li>
                  </Links>
                  ))
                }
              </Section>
            }
            
            { data.tags &&
              <Section title="Marcadores">
                {
                  data.tags.map(tag => (
                    <Tag 
                      key={tag.id}
                      title={tag.name}
                      />
                  ))
                }
              </Section>
            }


            <Button title="Voltar" onClick={handleBack}/>
            </Content>
          </main>
        }
    </Container>
  )
}