/* eslint-disable react/prop-types */
import styles from './button.module.scss'

const Button = ({id, type, onClick, text}) => {
  return (
    <div className={styles.buttonComponent}>
        <button name={id} id={id} type={type} onClick={onClick}>{text}</button> 
    </div>
  )
}

export default Button
