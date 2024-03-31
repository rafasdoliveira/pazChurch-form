// Componentes
import Header from './components/Header/header'
// Estilo 
import './App.css'
// Imagens
import BG from './assets/image/bg-friends.png'

function App() {

  return (
    <>
      <Header />
      <div className="welcome">
        <div className="text">
          <h2>Estamos felizes por sua decisão!</h2>
          <p>Preencha o formulário e nossa equipe entrará em contato com você!</p>
        </div>
      </div>
    </>
  )
}

export default App
