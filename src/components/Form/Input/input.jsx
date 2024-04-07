import { useState } from 'react'
import './input.css'
import User from '../../../assets/icons/Person.svg'
import Calendar from '../../../assets/icons/Calendar.svg'
import Phone from '../../../assets/icons/Phone.svg'
import ZipCode from '../../../assets/icons/ZipCode.svg'
import Downtown from '../../../assets/icons/Downtown.svg'
import Local from '../../../assets/icons/Local.svg'
import Number from '../../../assets/icons/Number.svg'
import Neighbor from '../../../assets/icons/Neighbor.svg'
import Church from '../../../assets/icons/Church.svg'
import Group from '../../../assets/icons/Group.svg'

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

const Input = () => {
  const [inputs] = useState(inputData)

  return (
    <>
      {inputs.map((input) => (
        <div key={input.id} className="input">
          <span></span>
          <img src={input.icon} alt="" srcset="" />
          <input type={input.type} placeholder={input.placeholder} required={input.required} />
        </div>
      ))}
    </>
  )
}

export default Input
