import './input.css'


const Input = ({ img, alt, type, id, value, min, max, placeholder, required, onChange, onClick }) => {    
  return (
    <>
      <div className="inputComponent">
        <span>
          <img src={img} alt={alt} />
        </span>
        <input 
          type={type} 
          id={id}
          name={id}
          value={value}
          min={min}
          max={max}
          placeholder={placeholder}
          required={required ? true : false}
          onChange={onChange}
          onClick={onClick}
        />
      </div>
    </>
  )
}

export default Input;
