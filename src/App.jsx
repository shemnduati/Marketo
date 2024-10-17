import About from "./components/About/About"
import Call from "./components/Call/Call"
import Clients from "./components/Clients/Clients"
import Companies from "./components/Companies/Companies"
import Customers from "./components/Customers/Customers"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Plans from "./components/Plans/Plans"
import Products from "./components/Products/Products"
import Reviews from "./components/Reviews/Reviews"
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
      <Customers />
      <Reviews />
      <Call />
      <Footer />
    </main>
    </>
  )
}

export default App
