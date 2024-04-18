// Componentes
import Button from './components/Button/button'
import Header from './components/Header/header'
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
          <Button id="cadastro-individual" text="Cadastro Individual"/>
          <Button id="cadastro-individual" text="Cadastro CSV"/>
        </div>
      </div>
    </>
  )
}

export default App
