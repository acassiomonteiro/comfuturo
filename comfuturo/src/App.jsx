import {Routes,Route} from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './pages/Home'
import Cursos from './pages/Cursos'
import Sobre from './pages/Sobre'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Linguistica from './pages/Linguistica'

function App() {
  return (
    // Rotas
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cursos" element={<Cursos/>}/>
        <Route path="/sobre" element={<Sobre/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="/linguistica" element={<Linguistica/>}/>
      </Routes>
    </>
  )
}

export default App