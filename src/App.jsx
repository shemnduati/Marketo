import About from "./components/About/About"
import Companies from "./components/Companies/Companies"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Products from "./components/Products/Products"
import Starategy from "./components/Strategy/Starategy"


function App() {

  return (
    <>
    <main>
      <Navbar />
      <Hero />
      <Companies />
      <About />
      <Starategy />
      <Products />
    </main>
    </>
  )
}

export default App
