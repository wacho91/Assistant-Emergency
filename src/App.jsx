import Hero from "./Components/Hero/Hero"
import HowItHelps from "./Components/HowItHelps/HowItHelps"
import Navbar from "./Components/Navbar/Navbar"
import Uses from "./Components/Uses/Uses"


function App() {

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <HowItHelps />
      <Uses />
    </main>
  )
}

export default App
