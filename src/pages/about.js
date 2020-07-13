import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';

import {
  AboutHeader,
  AboutDescription
} from '../styles/about';


const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <AboutHeader>Sobre Mim</AboutHeader>
    <AboutDescription>
      Olá! Meu nome é Aline, sou brasileira (Salvador-BA) formada em Ciência da Computação e atualmente cursando o mestrado em Sistemas de Informação no Instituto Politécnico de Bragança, em Portugal.
    
    </AboutDescription>

    <AboutDescription>
    Sou uma pessoa muito curiosa, adoro descobrir coisas novas e saí da minha zona de conforto criando este blog para compartilhar novos aprendizados e informações. Sou louca por livros e sempre estou lendo algo. Espero compartilhar um pouco da minha jornada com a tecnologia aqui!
    
    </AboutDescription>

    <AboutDescription>
    Contato: alineslopes.4@gmail.com

    </AboutDescription>
  </Layout>
);

export default AboutPage;