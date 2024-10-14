import Hero from "./Components/Hero/Hero"
import HowItHelps from "./Components/HowItHelps/HowItHelps"
import Navbar from "./Components/Navbar/Navbar"
import Trust from "./Components/Trust/Trust"
import Uses from "./Components/Uses/Uses"


function App() {

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <HowItHelps />
      <Uses />
      <Trust />
    </main>
  )
}

export default App
