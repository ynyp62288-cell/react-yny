import Nav from './Nav'
import { Hero } from './Hero'
import { AboutMe } from './AboutMe'
import { Project } from './Project'
import Contact from './Contact'
import { Footer } from './Footer'

const App = () => {
  return (
    <div className="app container">
      <Nav />
      <Hero />
      <main>
        <AboutMe />
        <Project />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App