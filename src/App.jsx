import React from 'react'
import Hero from './components/Hero';
import About from './components/About';

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Hero />
      <About />
      <section className='h-96 bg-black ' >

        this is the section below
      </section>
    </main>
  )
}

export default App