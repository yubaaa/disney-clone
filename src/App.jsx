import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header'
import Slider from './component/Slider'
import ProductionHouse from './component/ProductionHouse'
import GenreMovieList from './component/GenreMovieList'

function App() {
  

  return (
    <>
     <Header />
     <Slider />
     <ProductionHouse />
     <GenreMovieList />
    </>
  )
}

export default App
