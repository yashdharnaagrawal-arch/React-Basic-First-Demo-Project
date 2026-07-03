import react from 'react'
import './App.css'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedBooks from "./components/FeaturedBooks";

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedBooks />
    </>
  )
}

export default App
