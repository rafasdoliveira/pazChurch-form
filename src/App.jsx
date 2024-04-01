// Componentes
import Header from './components/Header/header'
// Estilo 
import './App.css'
// Imagens
import Input from './components/Form/Input/input'

function App() {

  return (
    <>
      <Header />
      <div className="welcome">
        <div className="texto">
          <h1>Estamos felizes por sua decisão!</h1>
          <p>Preencha o formulário e nossa equipe entrará em contato com você!</p>
        </div>    
      </div>
      {/* <div className="visao">
        <h2>Nossa Visão</h2>
        <div className="paragrafo">
          <p>A Paz Church Fortaleza é uma comunidade em crescimento, com cultos vibrantes marcados por um louvor inspirador e ministração da Palavra dinâmica.</p>
          <p>Fundada com base na oração e na orientação do Espírito Santo, a igreja é o ponto de partida do projeto global "Atos em Ação", liderado pelo Pastor Abe.</p>
          <p>Todos são convidados a fazer parte dessa família acolhedora.</p>
        </div>
      </div>
      <div className="seila">
        <p>Se você é novo convertido e ainda não faz parte de um LifeGroup, preencha o formulário abaixo.</p>
        <p className='convite'>Vamos amar te conhecer!</p>
        <Input />
      </div> */}
    </>
  )
}

export default App
