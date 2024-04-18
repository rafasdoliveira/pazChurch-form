/* eslint-disable react/prop-types */
import styles from './button.module.scss'
import { useNavigate } from 'react-router-dom'

const Button = ({id, type,  text}) => {

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    if(id === "cadastro-individual") {
    let path = `cadastroindividual` ; 
    navigate(path);
  } else if(id === "cadastro-csv") {
    let path = `cadastrocsv` ; 
    navigate(path);
  }
}

  return (
    <div className={styles.buttonComponent}>
        <button name={id} id={id} type={type} onClick={routeChange}>{text}</button> 
    </div>
  )
}

export default Button
