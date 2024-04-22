// Api
import fetchAddressByCep from '../api/fetchAddressByCep/fetchAddressByCep'
// Components
import Header from '../components/Header/header'
import Input from '../components/Form/Input/input'
import Footer from '../components/Footer/footer';
// Libs
import { useState } from 'react';
import { PhoneInput } from 'react-international-phone'
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// Styles
import styles from './cadastro.module.scss'
// Icons
import Calendar from '../assets/icons/Calendar.svg';
import Church from '../assets/icons/Church.png';
import Downtown from '../assets/icons/Downtown.png';
import Local from '../assets/icons/Local.png';
import Neighbor from '../assets/icons/Neighbor.png';
import Number from '../assets/icons/Number.png';
import Person from '../assets/icons/Person.svg';
import ZipCode from '../assets/icons/ZipCode.png';



const Cadastro = () => {

    const [form, setForm] = useState({
      nome: "",
      data_nascimento: "",
      sexo: "",
      telefone: "", 
      lider: "",
      pastor: "",
      campus: "", 
    })

    const [cep, setCep] = useState('')
    const [endereco, setEndereco] = useState({
      cep: "",
      cidade: "",
      numero_casa: "",
      logradouro: "",
      bairro: "",
    })
  
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
            cep: data.cep,
            cidade: data.localidade,
            logradouro: data.logradouro,
            bairro: data.bairro,
            numero_casa: "",
            uf: data.uf
          })

          setForm ({
            ...form,
            nome: form.nome,
            data_nascimento: form.data_nascimento,
            sexo: form.sexo,
            telefone: form.telefone, 
            lider: form.lider,
            pastor: form.pastor,
            campus: form.campus, 
          })
        }
        catch (error) {
          console.log({error})
        }
      }
    }

    console.log({endereco})
    console.log(form)
    
    const handleSubmit = async (e) => {
      e.preventDefault()

      try {
        const response = await axios.post('http://localhost:3001/users', {
          nome: form.nome,
          data_nascimento: form.data_nascimento,
          sexo: form.sexo,
          telefone: form.telefone, 
          lider: form.lider,
          pastor: form.pastor,
          campus: form.campus, 
          cep: endereco.cep,
          cidade: endereco.localidade,
          logradouro: endereco.logradouro,
          bairro: endereco.bairro,
          numeroCasa: endereco.numero_casa,
          uf: endereco.uf
        }) 
        alert('Novo convertido cadastrado com sucesso!')
        console.log({response})
      }
      catch(error) {
        console.log({error})
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
          onChange={(e) => setForm({...form, nome: e.target.value})}
          img={Person} 
          type="text" 
          id="nome" 
          placeholder="Insira seu nome"  />
        <Input 
          value={form.data_nascimento}
          onChange={(e) => setForm({...form, data_nascimento: e.target.value})}          
          img={Calendar} 
          type="date" 
          id="date" />
        <div className={styles.genero}>
          <p>Sexo:</p>
          <input 
            value= "Masculino"         
            onChange={(e) => setForm({...form, sexo: e.target.value})}
            type='radio'
            name='sexo' 
            id='sexo' 
            /> 
          Masculino
          <input  
            value= "Feminino"         
            onChange={(e) => setForm({...form, sexo: e.target.value})}
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
            img={ZipCode} 
            type="number" 
            id="cep" 
            placeholder="Insira seu CEP" 
          />
          <Input 
            value={endereco.cidade} 
            onChange={(e) => setEndereco({...endereco, cidade: e.target.value})}
            img={Downtown} 
            type="text" 
            id="cidade" 
            placeholder="Insira sua Cidade" 
          />
        </div>
          <Input 
            value={endereco.logradouro} 
            onChange={(e) => setEndereco({...endereco, logradouro: e.target.value})}
            img={Local} 
            type="text" 
            id="logradouro" 
            placeholder="Insira seu logradouro" 
          />
        <div className={styles.endereco}>
          <Input 
            value={form.numeroCasa}
            onChange={(e) => setEndereco({...endereco, numero_casa: e.target.value})}
            img={Number} 
            type="number" 
            id="cep" 
            placeholder="Insira o número da sua casa" 
          />
          <Input 
            value={endereco.bairro} 
            onChange={(e) => setEndereco({...endereco, bairro: e.target.value})}
            img={Neighbor} 
            type="text" 
            id="Bairro" 
            placeholder="Insira seu Bairro" 
          />
        </div>

        <h3>Pastoral</h3>
        <Input 
          value={form.lider}
          onChange={(e) => setForm({...form, lider: e.target.value})} 
          img={Person} 
          type="text" 
          id="lider" 
          placeholder="Insira o nome do seu líder" 
        />
        <Input 
          value={form.pastor}
          onChange={(e) => setForm({...form, pastor: e.target.value})} 
          img={Person} 
          type="text" 
          id="lider" 
          placeholder="Insira o nome do seu pastor" 
        />
        <Input 
          value={form.campus}
          onChange={(e) => setForm({...form, campus: e.target.value})} 
          img={Church} 
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
