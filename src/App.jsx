import styled from 'styled-components'
import About  from './components/About'
import Header from './components/Header'
import { Home } from './components/Home'
import Project from './components/projects'
import Contact from './components/Contact'

function App() {


  return (
    <>
      <div>
        <Header />
        <Section id="home">
          <Home />
        </Section>
        <Section id="about">
          <About />
        </Section>
        <Section id="projects">
          <Project />
        </Section>
        <Section id="contact">
          <Contact />
        </Section>
      </div>
    </>
  )
}

export default App

const Section = styled.section`
display: flex;
width: 100%;
height: 100vh;
background-color: #1F2020;
  

`