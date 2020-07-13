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
    <AboutHeader>About Me</AboutHeader>
    <AboutDescription>
    My name is Aline Lopes, I'm from Salvador (Brazil) and currently live in Bragança, Portugal. I have a degree in Computer Science and I am doing a master's degree in Information Systems at the Polytechnic Institute of Bragança

.
    </AboutDescription>

    <AboutDescription>
    To find out more about my professional career, you can view my resume.

    </AboutDescription>
  </Layout>
);

export default AboutPage;