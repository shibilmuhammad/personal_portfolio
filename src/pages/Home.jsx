import React from 'react'
import { Header } from '../components/Header'
import ImageCard from '../components/ImageCard'
import Intro from '../components/Intro'

const Home = () => {
  return (
    <div className='h-full'>
        <Header/>
        <div className=''>
            <ImageCard/>
            <Intro/>

        </div>
    </div>
  )
}

export default Home