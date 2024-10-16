import About from "./components/About/About"
import Companies from "./components/Companies/Companies"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
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
    </main>
    </>
  )
}

export default App
