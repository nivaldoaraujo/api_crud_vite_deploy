
import './App.css'
import AppRouter from './AppRouter'
import Menu from './Componentes/Menu'
import ApiUser from './Pages/ApiUser'
import Home from './Pages/Home'
import Rodape from './Componentes/Rodape'

function App() {

  return (
    <>
      {/* <Home /> */}
      {/* <ApiUser /> */}
      <Menu />
      <AppRouter />
      <Rodape />
    </>
  )
}

export default App
