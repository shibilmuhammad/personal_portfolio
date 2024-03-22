import React from 'react'
import { Header } from '../components/Header'
import ImageCard from '../components/ImageCard'
import Intro from '../components/Intro'

const Home = () => {
  return (
    <section id='home' className='h-full mt-16'>
        
        <div className=''>
            <ImageCard/>
            <Intro/>

        </div>
    </section>
  )
}

export default Home