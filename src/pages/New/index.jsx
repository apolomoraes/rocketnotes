import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Container, Form } from './styles';
import { api } from '../../services/api';
import { Toast } from '../../Toast';
import { Loading } from '../../components/Loading';

export function New() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const [showLoading, setShowLoading] = useState(false);

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  function handleAddLink() {
    setLinks(prevState => [...prevState, newLink])
    setNewLink("");
  }

  function handleRemoveLink(linkDeleted) {
    setLinks(prevState => prevState.filter(link => link !== linkDeleted));
  }

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(tagDeleted) {
    setTags(prevState => prevState.filter(tag => tag !== tagDeleted));
  }

  async function handleNewNote() {
    if (!title) {
      return Toast().handleInfo("Digite o título da nota");
    }

    if (newLink) {
      return Toast().handleInfo("Você deixou um link no campo para adicionar, mas não adicionou. Clique em + ou deixe o campo vazio");
    }

    if (newTag) {
      return Toast().handleInfo("Você deixou uma tag no campo para adicionar, mas não adicionou. Clique em + ou deixe o campo vazio");
    }

    if (links.length === 0) {
      return Toast().handleInfo("Adicione pelo menos um link")
    }

    if (tags.length === 0) {
      return Toast().handleInfo("Adicione pelo menos uma tag")
    }

    setShowLoading(true);
    await api.post("/notes", {
      title,
      description,
      tags,
      links
    });

    setShowLoading(false);
    Toast().handleSuccess("Nota criada com sucesso");
    navigate(-1);
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <ButtonText
              title="voltar"
              onClick={handleBack}
            />
          </header>

          <Input
            placeholder="Título"
            onChange={event => setTitle(event.target.value)}
          />
          <Textarea
            placeholder="Observações"
            onChange={event => setDescription(event.target.value)}
          />

          <Section title="Links úteis">
            {
              links.map((link, index) => (
                <NoteItem
                  key={String(index)}
                  value={link}
                  onClick={() => handleRemoveLink(link)}
                />
              ))

            }

            <NoteItem
              isNew
              placeholder="Novo link"
              value={newLink}
              onChange={event => setNewLink(event.target.value)}
              onClick={handleAddLink}
            />
          </Section>

          <Section title="Tags">
            <div className='tags'>
              {
                tags.map((tag, index) => (
                  <NoteItem
                    key={String(index)}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />
                ))
              }

              <NoteItem
                isNew
                placeholder="Nova tag"
                onChange={event => setNewTag(event.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />
            </div>
          </Section>
          <Button
            title="Salvar"
            onClick={handleNewNote}
          />
        </Form>
      </main>
      {showLoading && <Loading />}
    </Container>
  )
}