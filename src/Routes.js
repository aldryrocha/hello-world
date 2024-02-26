import { BrowserRouter, Route, Routes } from "react-router-dom"
import PaginaPadrao from "componentes/PaginaPadrao"
import Rodape from "componentes/Rodape"
import Menu from "./componentes/Menu"
import Inicio from "./paginas/Inicio"
import SobreMim from "./paginas/SobreMim"
import Post from "paginas/Post"
import NaoEncontrada from "paginas/NaoEncontrada"

function AppRoutes() {
  return (
    <BrowserRouter>
    <Menu />
      <Routes>
       
        <Route path='/' element={<PaginaPadrao />}>  { /* Rota filhas/alinhadas */ }
          <Route index element={<Inicio />} />
          <Route path="sobre-mim" element={<SobreMim />} />          
        </Route>

        <Route path="posts/:id/*" element={<Post />} />        
        <Route path="*" element={<NaoEncontrada />} />

      </Routes>
      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes
