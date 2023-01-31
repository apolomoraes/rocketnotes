import { Container, Form, Background } from './styles'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import particlesOptions from "../../../particles.json";
import React, { useCallback } from 'react';
import { loadFull } from "tsparticles";
import Particles from "react-particles";

export function SignUp() {
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
        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="E-mail" type="email" icon={FiMail} />
        <Input placeholder="Password" type="password" icon={FiLock} />


        <Button title="Cadastrar" />

        <Link to="/" >Login</Link>
      </Form>

    </Container>
  )
}