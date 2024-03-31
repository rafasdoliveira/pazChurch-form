import './input.css'

const Input = () => {
  return (
    <>
      <label htmlFor="name">Nome
        <div className="input">
            <span>

            </span>
            <input type="text" id="name" name="name" required />
        </div>
      </label>
    </>
  )
}

export default Input
