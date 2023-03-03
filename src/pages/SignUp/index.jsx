import { useState } from "react";
import { Container, Form, Background } from './styles'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import React, { useCallback } from 'react';
import particlesOptions from "../../../particles.json";
import { loadFull } from "tsparticles";
import Particles from "react-particles";
import { Toast } from "../../Toast";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return Toast().handleError('Preencha todos os campos');
    }

    api.post("/users", { name, email, password })
      .then(() => {
        Toast().handleSuccess('Usuário cadastrado com sucesso');
        navigate("/")
      })
      .catch(error => {
        if (error.response) {
          Toast().handleError(error.response.data.message);
        } else {
          Toast().handleError('Não foi possível cadastrar');
        }
      })
  }

  const particlesInit = useCallback(main => {
    loadFull(main);
  }, [])
  return (
    <Container>
      <Background />

      <Form>
        <Particles options={particlesOptions} init={particlesInit} />
        <h1>RocketNotes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Crie sua conta</h2>
        <Input placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={event => setName(event.target.value)}
        />

        <Input
          placeholder="E-mail"
          type="email"
          icon={FiMail}
          onChange={event => setEmail(event.target.value)}
        />

        <Input
          placeholder="Password"
          type="password"
          icon={FiLock}
          onChange={event => setPassword(event.target.value)}
        />


        <Button title="Cadastrar" onClick={handleSignUp} />

        <Link to="/" >Login</Link>
      </Form>

    </Container>
  )
}