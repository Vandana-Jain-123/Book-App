import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom"
import './App.css'
import { Form } from 'react-router-dom'
import Home from "./pages/Home"
import Books from "./pages/Books"
import Login from "./pages/Login"
import BookDetail from './pages/BookDetail'
import BookAdd from './pages/BookAdd'
function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path='/books' element={<Books />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bookDetail/:id" element={<BookDetail/>}/>
        <Route path="/bookAdd" element={<BookAdd/>}/>
      </Routes>

    </>
  )
}

export default App



// https://careful-mature-sceptre.glitch.me/books
