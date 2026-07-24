import Nav from './components/Nav'
import Hero from './components/Hero'
import Words from './components/Words'
import Form from './components/Form'
import Clai from './components/Clai'
import Research from './components/Research'
import Team from './components/Team'
import Featured from './components/Featured'
import Collaborate from './components/Collaborate'
import Language from './components/Language'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Words />
        <Form />
        <Clai />
        <Research />
        <Team />
        <Featured />
        <Collaborate />
        <Language />
      </main>
      <Footer />
    </>
  )
}

export default App
