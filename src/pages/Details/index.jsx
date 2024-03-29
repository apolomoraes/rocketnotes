import { useState, useEffect } from "react";
import { Container, Content } from "./styles";
import { api } from "../../services/api";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { Links } from "./styles";
import { ButtonText } from "../../components/ButtonText";
import { Toast } from "../../Toast";
import Modal from "react-modal";
import "./styles.css"
import { Loading } from "../../components/Loading";

Modal.setAppElement("#root");

export function Details() {
  const [data, setData] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showLoading, setShowLoading] = useState(false);


  const params = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  async function handleRemove() {
    await api.delete(`/notes/${params.id}`);

    Toast().handleSuccess("Nota excluída com sucesso");
    closeModal();
    handleBack();
  }

  useEffect(() => {
    async function fetchNote() {
      setShowLoading(true);
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
      setShowLoading(false);
    }

    fetchNote();
  }, []);

  return (
    <Container>
      <Header />

      {
        data &&
        <main>
          <Content>
            <ButtonText
              title="Excluir nota"
              onClick={openModal}
            />
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              contentLabel="Modal remove note"
              overlayClassName="modal-overlay"
              className="modal-content"
            >
              <h2>Deseja realmente remover a nota?</h2>
              <div>
                <button onClick={handleRemove} >Sim</button>
                <button onClick={closeModal} >Não</button>
              </div>
            </Modal>


            <h1>
              {data.title}
            </h1>

            <p>
              {data.description}
            </p>

            {
              data.links.length > 0 &&
              <Section title="Links úteis">
                <Links>
                  {
                    data.links.map(link => (
                      <li key={String(link.id)} >
                        <a href={`https://${link.url}`} target="_blank">{link.url}</a>
                      </li>
                    ))
                  }
                </Links>
              </Section>
            }

            {
              data.tags.length > 0 &&
              <Section title="Tags">
                {
                  data.tags.map(tag => (
                    <Tag
                      key={String(tag.id)}
                      title={tag.name}
                    />
                  ))
                }
              </Section>
            }


            <Button title="Voltar" onClick={handleBack} />
          </Content>
        </main>
      }
      {showLoading && <Loading />}

    </Container>
  )
}