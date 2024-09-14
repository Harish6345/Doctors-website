import React from 'react'
import Header from '../components/Header'
import SpecalityMenu from '../components/SpecalityMenu'
import Topdoctors from '../components/Topdoctors'
import Banner from '../components/Banner'


function Home() {
  return (
    <div>
      <Header/>
      <SpecalityMenu/>
      <Topdoctors/>
      <Banner/>
    </div>
  )
}

export default Home