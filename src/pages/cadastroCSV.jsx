import Header from '../components/Header/header'
import Input from '../components/Form/Input/input'
// Styles
import styles from './cadastro.module.scss'
// Icons

import Footer from '../components/Footer/footer';

const Cadastro = () => {

  return (
    <>
      <Header/>
      <div className={styles.chamada}>
        <div>
          <p>Se você é responsável pelo cadastro de novos convertidos e por algum motivo precisou preencher em uma planilha, aqui é o lugar certo para fazer o envio!</p>
          <p>
            <strong>Vamos te auxiliar nesse processo!</strong> 
          </p>
        </div>

        <Input type="file" id="csv"/>
        <button type='submit'>Enviar</button>      
      </div>

        
      
     

      <Footer/>
    </>
  )
}

export default Cadastro
