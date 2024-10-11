import About from "./components/About/About"
import Companies from "./components/Companies/Companies"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Starategy from "./components/Strategy/Starategy"


function App() {

  return (
    <>
    <div>
      <h1>Marketo</h1>
      <Navbar />
      <Hero />
      <Companies />
      <About />
      <Starategy />

    </div>
    </>
  )
}

export default App
