import Hero from "./Components/Hero/Hero"
import HowItHelps from "./Components/HowItHelps/HowItHelps"
import Navbar from "./Components/Navbar/Navbar"


function App() {

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <HowItHelps />
    </main>
  )
}

export default App
