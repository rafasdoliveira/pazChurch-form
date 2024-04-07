// Componentes
import Header from './components/Header/header'
import Input from './components/Form/Input/input'
import Select from './components/Form/Select/select'
// Estilo 
import './App.css'
// Imagens
import User from './assets/icons/Person.svg'
import Calendar from './assets/icons/Calendar.svg'
import Phone from './assets/icons/Phone.svg'
import ZipCode from './assets/icons/ZipCode.svg'
import Downtown from './assets/icons/Downtown.svg'
import Local from './assets/icons/Local.svg'
import Number from './assets/icons/Number.svg'
import Neighbor from './assets/icons/Neighbor.svg'
import Church from './assets/icons/Church.svg'
import Group from './assets/icons/Group.svg'

const inputData = [
  {id: 1, icon: User, type: 'text', placeholder: 'Insira seu nome', required: true}, 
  {id: 2, icon: Calendar, type: 'date', placeholder: 'Data de nascimento', required: true},
  {id: 3, icon: Phone, type: 'tel', placeholder: 'Insira seu telefone', required: true},
  {id: 4, icon: ZipCode, type: 'text', placeholder: 'Insira seu CEP', required: true},
  {id: 5, icon: Downtown, type: 'text', placeholder: 'Insira sua cidade', required: true},
  {id: 6, icon: Local, type: 'text', placeholder: 'Insira seu endereço', required: true},
  {id: 7, icon: Number, type: 'number', placeholder: 'Insira o número da sua casa', required: true},
  {id: 8, icon: Neighbor, type: 'text', placeholder: 'Insira seu bairro', required: true},
  {id: 9, icon: Church, type: 'text', placeholder: 'Insira seu campus', required: true},
  {id: 10, icon: Group, type: 'text', placeholder: 'Insira seu LifeGroup', required: true}
]

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
      <div className="visao">
        <h2>Nossa Visão</h2>
        <div className="paragrafo">
          <p>A Paz Church Fortaleza é uma comunidade em crescimento, com cultos vibrantes marcados por um louvor inspirador e ministração da Palavra dinâmica.</p>
          <p>Fundada com base na oração e na orientação do Espírito Santo, a igreja é o ponto de partida do projeto global "Atos em Ação", liderado pelo Pastor Abe.</p>
          <p>Todos são convidados a fazer parte dessa família acolhedora.</p>
        </div>
      </div>
      <div className="forms">
        <div className="forms-text">
          <p>
            Se você é novo convertido e ainda não faz paarte de um LifeGroup, preencha o formulario abaixo.</p>
          <p className='bold'>Vamos amar te conhecer!</p>
        </div>
        <div className="dados-pessoais">
          <h3>Dados Pessoais</h3>
          <Input img={User} type='text' id='nome' placeholder='Insira seu nome' required={true}/>
          <Input img={Calendar} type='date' id='data-nascimento' required={true}/>
          {/* <div className="genero">
            <input type="radio" /> Masculino
            <input type="radio" /> Feminino
          </div> */}
          <Input img={Phone} type='tel' id='telefone' placeholder='Insira seu telefone' required={true}/>
        </div>
        <div className="dados-pessoais">
          <h3>Endereço</h3>
          <Input img={ZipCode} type='text' id='cep' placeholder='Insira seu CEP' required={true}/>
          <Input img={Downtown} type='text' id='cidade' placeholder='Insira sua cidade' required={true}/>
          <Input img={Local} type='text' id='endereco' placeholder='Insira seu endereço' required={true}/>
          <Input img={Number} type='number' id='numero' placeholder='Insira o número da sua casa' required={true}/>
          <Input img={Neighbor} type='text' id='bairro' placeholder='Insira seu bairro' required={true}/>
        </div>
        <div className="dados-pessoais">
          <h3>Pastoral</h3>
          <Select img={Church} id='campus' placeholder='Insira seu campus' required={true}/>
          <Select img={Group} id='lifegroup' placeholder='Insira seu LifeGroup' required={true}/>
        </div>
        
        <div className="button">
          <button>Enviar</button>
        </div>
      </div>
    </>
  )
}

export default App
