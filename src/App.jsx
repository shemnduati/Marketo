import About from "./components/About/About"
import Clients from "./components/Clients/Clients"
import Companies from "./components/Companies/Companies"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Plans from "./components/Plans/Plans"
import Products from "./components/Products/Products"
import Slider from "./components/Slider/Slider"
import Starategy from "./components/Strategy/Starategy"


function App() {

  return (
    <>
    <main>
      <Navbar />
      <Hero />
      <Companies />
      <About />
      <Slider />
      <Products />
      <Starategy />
      <Clients />
      <Plans />
    </main>
    </>
  )
}

export default App
