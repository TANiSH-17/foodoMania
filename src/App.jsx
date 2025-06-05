import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import MealPlanning from './components/MealPlanning'
import {Route, Routes } from 'react-router-dom'
import MealInfo from './components/MealInfo'
import ExploreGlobal from './components/ExploreGlobal'
import NutritionalInfo from './components/NutritionalInfo'
import RecipeOfTheDay from './components/RecipeOfTheDay'

function App() {

  return (
    <>
      <Navbar />   
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/planmeal' element={<MealPlanning />}/>
        <Route path='/:Recipe_id' element={<MealInfo />}/>
        <Route path='/explore' element={<ExploreGlobal />}/>
        <Route path='/nutritionalInfo' element={<NutritionalInfo/>} />
        <Route path='/RecipeOfTheDay' element={<RecipeOfTheDay />} />
      </Routes>
      
    </>
  )
}

export default App
