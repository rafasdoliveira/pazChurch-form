// Componentes
import Header from './components/Header/header'
import Input from './components/Form/Input/input'
// import Select from './components/Form/Select/select'
import fetchAddressByCep from './api/fetchAddressByCep/fetchAddressByCep'
// Bibliotecas
import { useState } from 'react'
import { PhoneInput } from 'react-international-phone'
// Estilo 
import styles from './styles/globals.module.scss'
import 'react-international-phone/style.css'
// Icons
import User from './assets/icons/Person.svg';
import Calendar from './assets/icons/Calendar.svg';


function App() {  
  const [cep, setCep] = useState('')
  const [endereco, setEndereco] = useState({
    logradouro: "",
    bairro: "",
    cidade: "",
    uf: ""
  })

  const handleCep = async (e) => {
    const cep = e.target.value
    setCep(cep) 
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
      <Header />
      <div className={styles.boas_vindas}>
        <div>
          <h1>Estamos felizes por sua decisão!</h1>
          <p>Preencha o formulário e nossa equipe entrará em contato com você!</p>
        </div>    
      </div>

      <div className={styles.visao}>
        <h2>Nossa Visão</h2>
        <div>
          <p>A Paz Church Fortaleza é uma comunidade em crescimento, com cultos vibrantes marcados por um louvor inspirador e ministração da Palavra dinâmica.</p>
          <p>Fundada com base na oração e na orientação do Espírito Santo, a igreja é o ponto de partida do projeto global  Atos em Ação, liderado pelo Pastor Abe.</p>
          <p>Todos são convidados a fazer parte dessa família acolhedora.</p>
        </div>
      </div>

      <div className={styles.chamada}>
        <div>
          <p>Se você é novo convertido e ainda não faz parte de um LifeGroup, preencha o formulario abaixo.</p>
          <p>
            <strong>Vamos amar te conhecer!</strong> 
          </p>
        </div>
      </div>

      <div className={styles.form}>
        <h3>Dados Pessoais</h3>
        <Input img={User} type="text" id="nome" placeholder="Insira seu nome"/>
        <Input img={Calendar} type="date" id="date"/>
        <div className={styles.genero}>
          <p>Sexo:</p>
          <input type='radio' name='sexo' value='masculino' /> Masculino
          <input type='radio' name='sexo' value='feminino' /> Feminino
        </div>
        <div className={styles.inputPhone}>
          <PhoneInput defaultCountry='br' defaultMask='( )' />
        </div>

        <h3>Endereço</h3>
        <div className={styles.endereco}>
          <Input value={cep} img={User} type="number" id="cep" placeholder="Insira seu CEP" onChange={handleCep}/>
          <Input value={endereco.cidade} img={User} type="text" id="cidade" placeholder="Insira sua Cidade"/>
        </div>
          <Input readyOnly value={endereco.logradouro} img={User} type="text" id="logradouro" placeholder="Insira seu logradouro"/>
        <div className={styles.endereco}>
          <Input img={User} type="number" id="numeroCasa" placeholder="Insira o número da sua casa"/>
          <Input value={endereco.bairro} img={User} type="text" id="Bairro" placeholder="Insira seu Bairro"/>
        </div>
      </div>
    </>
  )
}

export default App
