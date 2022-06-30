import './css/style.css';

export const Form = ({ text, placeholder, name, type, value, handleChange }) => {
  return (
    <>
      <label htmlFor={ name }>{ text }</label>
      <input
        id={ name }
        type={ type }
        name={ name }
        placeholder={ placeholder }
        value={ value }
        onChange={ handleChange }
      />
    </>
  )
}
