import style from './Input.module.css';
import PropTypes from 'prop-types';

function Input({type, text, name, placeholders , onChange, value}){
  return(
    <div className={style.form_control}>
      <label htmlFor={name}>{text}</label>
      <input 
        type={type}
        id={name}
        name={name} 
        placeholders ={placeholders }
        onChange={onChange}
        value={value}
      />
    </div>
  )
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string
};

export default Input;