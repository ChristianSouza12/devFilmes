import React from 'react';

import { Container, GitHub, Linkedin, Nav } from './styles';



export default function Footer() {
  return (
    <>
      <Container>
        <Nav>
          <p>Desenvolvido por Christian Souza.</p>

          <p>
            <a
              href="https://www.linkedin.com/in/christian-souzaa/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin />
            </a>

            <a
              href="https://github.com/ChristianSouza12"
              target="_blank"
              rel="noreferrer"
            >
              <GitHub />
            </a>
          </p>
        </Nav>
      </Container>
    </>
  );
}