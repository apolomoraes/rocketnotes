import { Container, Content } from "./styles"
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"
import { Links } from "./styles"
import { ButtonText } from "../../components/ButtonText"


export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>
            Introdução ao React
          </h1>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quod iusto error incidunt qui velit impedit eaque minus, delectus quidem nulla quaerat eveniet debitis repellendus temporibus, molestias sapiente commodi in? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus error sapiente dolores at voluptatibus fugiat illo, quasi iusto quo reiciendis veritatis unde adipisci dolore ad blanditiis quis repellat sequi eligendi!</p>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#" target="_blank">https://www.rocketseat.com.br/</a>
              </li>
              <li>
                <a href="#" target="_blank">https://www.rocketseat.com.br/</a>
              </li>
            </Links>
          </Section>

          <Section title="Tags">
            <Tag title="rocket" />
            <Tag title="rocket" />
          </Section>


          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  )
}