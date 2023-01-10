import { useState } from "react"
import {PropTypes} from 'prop-types'

export const AddCategory = ({onNewCategory}) => {

    const [inputvalue, setInputvalue] = useState('');

    const onInputChange = (e) => setInputvalue(e.target.value);

    const onSubmit = e => {
        e.preventDefault();
        if (inputvalue.trim().length < 1) return;
        onNewCategory(inputvalue.trim());
        setInputvalue('');
    };

  return (
    <form onSubmit={onSubmit} aria-label='form'>
    <input type="text" placeholder="Buscar GIFs" value={inputvalue} onChange={onInputChange}/>
    </form>
  )
}


AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
}