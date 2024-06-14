import React from 'react'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <main className='w-full flex flex-col'>
      <section className='w-full flex justify-center items-center'>
        <Hero />
      </section>
    </main>
  )
}

export default Home