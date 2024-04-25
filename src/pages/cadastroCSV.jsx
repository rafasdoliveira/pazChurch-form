import Header from '../components/Header/header';
import Input from '../components/Form/Input/input';
import Footer from '../components/Footer/footer';
// Styles
import styles from './cadastrocsv.module.scss';
// Axios
import axios from 'axios';



const Cadastro = () => {

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    const file = document.querySelector('#csv').files[0]
    formData.append('file', file)

    try {
      const { data } = await axios.post('http://localhost:3001/cadastrocsv', formData, {
      }, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }) 
      alert('Lista de novos convertido enviada com sucesso!')
      console.log({ data })
    }
    catch(error) {
      alert(`Houve algum erro! Entre em contato com o responsável\nErro: ${error}`)
      console.log({error})
    }
  }

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
        <form onSubmit={handleSubmit}>
          <div className={styles.input}>
            <div className={styles.customFileUpload}>
              <Input type="file" id="csv" className={styles.inputFile} />
              <label htmlFor="csv" className={styles.customFileLabel}>Escolher arquivo</label>
            </div>
            <button type='submit'>Enviar</button>      
          </div>
        </form>
      </div>

      <Footer/>
    </>
  )
}

export default Cadastro;
