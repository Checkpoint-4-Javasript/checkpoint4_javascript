import { } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import Produtos from './Produtos'
import Sobre from './Sobre'
import Nav from './Nav'
import Footer from './Footer'
import NotFound from './Notfound'
function App() {

  return (
    <>
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Home" element={<Home />}/>
      <Route path="/Produtos" element={<Produtos />}/>
      <Route path="/Sobre" element={<Sobre />}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
