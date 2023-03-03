import { useContext } from 'react';
import { Container, Form, Background } from './styles';
import { FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import particlesOptions from "../../../particles.json";
import React, { useCallback } from 'react';
import { loadFull } from "tsparticles";
import Particles from "react-particles";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }

  const particlesInit = useCallback(main => {
    loadFull(main);
  }, [])
  return (
    <Container>

      <Form>
        <Particles options={particlesOptions} init={particlesInit} />
        <h1>RocketNotes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Faça seu login</h2>
        <Input placeholder="E-mail" type="email" icon={FiMail} onChange={event => setEmail(event.target.value)} />
        <Input placeholder="Password" type="password" icon={FiLock} onChange={event => setPassword(event.target.value)} />

        <Button title="Entrar" onClick={handleSignIn} />

        <Link to="/register">Criar conta</Link>
      </Form>
      <Background />

    </Container>
  )
}