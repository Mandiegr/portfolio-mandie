import styled from 'styled-components'
import About  from './components/About'
import { Home } from './components/Home'
import Project from './components/Projects'
import Contact from './components/Contact'
import Navbar from './components/NavBar'

function App() {


  return (
    <>
      <div>
        <Navbar />
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
 background: linear-gradient(135deg, #4851B3 ,#42203F);
  

`