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
  
    const [form, setForm] = useState({})
    console.log({form})

    const handleSubmit = async (e) => {
      e.preventDefault()

      setForm ({
        nome: "",
        dataNascimento: "",
        sexo: "",
        telefone: "", 
        lider: "",
        pastor: "",
        campus: "", 
      })
      setForm("")

    }

    const handleCep = async (e) => {
      const cepValue = e.target.value
      setCep(cepValue) 
      console.log({cepValue})
  
      if (cepValue.length === 8) {
        try {
          const data =  await fetchAddressByCep(cepValue)
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
        <Input 
          value={form.nome}
          onChange={(e) => setForm(e.target.value)}  
          img={User} 
          type="text" 
          id="nome" 
          placeholder="Insira seu nome"  />
        <Input 
          value={form.dataNascimento}
          onChange={(e) => setForm(e.target.value)}
          img={Calendar} 
          type="date" 
          id="date" />
        <div className={styles.genero}>
          <p>Sexo:</p>
          <input 
            value={form.sexo}
            onChange={(e) => setForm(e.target.value)}
            type='radio'
            name='sexo' 
            id='sexo' 
            /> 
          Masculino
          <input  
            value={form.sexo}
            onChange={(e) => setForm(e.target.value)}
            type='radio' 
            name='sexo'
            id='sexo' 
            /> 
          Feminino
        </div>
        <div className={styles.inputPhone}>
          <PhoneInput  
            defaultCountry='br' 
            defaultMask='( )'
            value={form.telefone}
            onChange={(value) => setForm({...form, telefone: value})} 
          />
        </div>

        <h3>Endereço</h3>
        <div className={styles.endereco}>
          <Input 
            value={cep} 
            onChange={handleCep}
            img={User} 
            type="number" 
            id="cep" 
            placeholder="Insira seu CEP" 
          />
          <Input 
            value={endereco.cidade} 
            onChange={(e) => setEndereco({...endereco, logradouro: e.target.value})}
            img={User} 
            type="text" 
            id="cidade" 
            placeholder="Insira sua Cidade" 
          />
        </div>
          <Input 
            value={endereco.logradouro} 
            onChange={(e) => setForm(e.target.value)}
            img={User} 
            type="text" 
            id="logradouro" 
            placeholder="Insira seu logradouro" 
          />
        <div className={styles.endereco}>
          <Input 
            value={form.numeroCasa}
            onChange={(e) => setForm(e.target.value)}
            img={User} 
            type="number" 
            id="cep" 
            placeholder="Insira o número da sua casa" 
          />
          <Input 
            value={endereco.bairro} 
            onChange={(e) => setForm(e.target.value)}
            img={User} 
            type="text" 
            id="Bairro" 
            placeholder="Insira seu Bairro" 
          />
        </div>

        <h3>Pastoral</h3>
        <Input 
          value={form.lider}
          onChange={(e) => setForm(e.target.value)}
          img={User} 
          type="text" 
          id="lider" 
          placeholder="Insira o nome do seu líder" 
        />
        <Input 
          value={form.pastor}
          onChange={(e) => setForm(e.target.value)}
          img={User} 
          type="text" 
          id="lider" 
          placeholder="Insira o nome do seu pastor" 
        />
        <Input 
          value={form.campus}
          onChange={(e) => setForm(e.target.value)}
          img={User} 
          type="text" 
          id="lider" 
          placeholder="Insira o seu campus"
        />
        
        <button type='submit'>Enviar</button>      
        </form>
      </div>

      <Footer/>
    </div>
    </>
  )
}

export default Cadastro
