import Header from '../components/Header/header'
import Input from '../components/Form/Input/input'
import fetchAddressByCep from '../api/fetchAddressByCep/fetchAddressByCep'
// Libs
import { useState } from 'react';
import { PhoneInput } from 'react-international-phone'
// Styles
import styles from './cadastro.module.scss'
// Icons
import User from '../assets/icons/Person.svg';
import Calendar from '../assets/icons/Calendar.svg';
import Footer from '../components/Footer/footer';

const Cadastro = () => {

    const [cep, setCep] = useState('')
    const [endereco, setEndereco] = useState({
      logradouro: "",
      bairro: "",
      cidade: "",
      uf: ""
    })
    const [formDados, setFormDados] = useState({
      nome: "",
      dataNascimento: "",
      sexo: "",
      telefone: "",
      cep: "",
      cidade: "",
      logradouro: "",
      numeroCasa: "",
      bairro: "",
      lider: "",
      pastor: "",
      campus: ""
    })
  
    const handleForm = (e) => {
      const { id, value } = e.target
      setFormDados({
        ...formDados,
        [id]: value
      })
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault()
      console.log({formDados})
  
      try {
        const url = 'http://localhost:3001/api/user'
        const response = await sendData(url, formDados)
        console.log({response})
      }
      catch (error) {
        console.log({error})
      }
    }
  
    const handleCep = async (e) => {
      const cep = e.target.value
      setCep(cep) 
      setFormDados({
        ...formDados,
        cep
      })
      console.log({cep})
  
      if (cep.length === 8) {
        try {
          const data =  await fetchAddressByCep(cep)
          console.log({ data })
  
          setEndereco({
            ...endereco,
            logradouro: data.logradouro,
            bairro: data.bairro,
            cidade: data.localidade,
            uf: data.uf
          })
        }
        catch (error) {
          console.log({error})
        }
      }
    }

  return (
    <>
    <Header/>
    <div>
      <div className={styles.chamada}>
        <div>
          <p>Se você é novo convertido e ainda não faz parte de um LifeGroup, preencha o formulario abaixo.</p>
          <p>
            <strong>Vamos amar te conhecer!</strong> 
          </p>
        </div>
      </div>

      <div className={styles.form}>
        <form onSubmit={handleSubmit}>
        <h3>Dados Pessoais</h3>
        <Input value={formDados.nome} img={User} type="text" id="nome" placeholder="Insira seu nome" />
        <Input value={formDados.dataNascimento} img={Calendar} type="date" id="date" />
        <div className={styles.genero}>
          <p>Sexo:</p>
          <input value={formDados.sexo} type='radio' name='sexo' /> Masculino
          <input value={formDados.sexo} type='radio' name='sexo' /> Feminino
        </div>
        <div className={styles.inputPhone}>
          <PhoneInput value={formDados.telefone} defaultCountry='br' defaultMask='( )' />
        </div>

        <h3>Endereço</h3>
        <div className={styles.endereco}>
          <Input value={cep} img={User} type="number" id="cep" placeholder="Insira seu CEP" onChange={handleCep}/>
          <Input value={endereco.cidade} img={User} type="text" id="cidade" placeholder="Insira sua Cidade" />
        </div>
          <Input value={endereco.logradouro} img={User} type="text" id="logradouro" placeholder="Insira seu logradouro" />
        <div className={styles.endereco}>
          <Input img={User} type="number" id="numeroCasa" placeholder="Insira o número da sua casa" />
          <Input value={endereco.bairro} img={User} type="text" id="Bairro" placeholder="Insira seu Bairro" />
        </div>

        <h3>Pastoral</h3>
        <Input value={formDados.lider} img={User} type="text" id="lider" placeholder="Insira o nome do seu líder" />
        <Input value={formDados.pastor} img={User} type="text" id="lider" placeholder="Insira o nome do seu pastor" />
        <Input value={formDados.campus} img={User} type="text" id="lider" placeholder="Insira o seu campus"/>

        <button type='submit'>Enviar</button>      
        </form>
      </div>

      <Footer/>
    </div>
    </>
  )
}

export default Cadastro
