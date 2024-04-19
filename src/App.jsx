// Componentes
import Button from './components/Button/button'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
// Estilo 
import styles from './styles/globals.module.scss'
import 'react-international-phone/style.css'

function App() {  

  return (
    <>
      <Header />
      <div className={styles.boas_vindas}>
        <div className={styles.textos}>
          <h1>Estamos felizes por sua decisão!</h1>
          <p>Preencha o formulário e nossa equipe entrará em contato com você!</p>
        </div>    
      
        <div className={styles.button}>
          <Button id="cadastro-individual" text="Cadastro Individual" path="cadastroindividual" onClick="OnClick"/>
          <Button id="cadastro-csv" text="Cadastro CSV"/>
        </div>
      </div>
      <div className={styles.visao}>
        <h2>Nossa Visão</h2>
        <div>
          <p>A Paz Church Fortaleza é uma comunidade em crescimento, com cultos vibrantes marcados por um louvor inspirador e ministração da Palavra dinâmica.</p>
          <p>Fundada com base na oração e na orientação do Espírito Santo, a igreja é o ponto de partida do projeto global  Atos em Ação, liderado pelo Pastor Abe.</p>
          <p className={styles.convite}>Todos são convidados a fazer parte dessa família acolhedora.</p>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default App
