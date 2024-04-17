/* eslint-disable react/prop-types */

import styles from './input.module.scss';


const Input = ({img, id, type, placeholder, value, onClick, onChange }) => {
  return (
    <div className={styles.input}>
      <img src={img} alt="" />
      
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onClick={onClick}
        className={ styles.input}
      />
    </div>
  );
};

export default Input;