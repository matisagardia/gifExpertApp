import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputvalue, setInputvalue] = useState('');

    const onInputChange = (e) => setInputvalue(e.target.value);

    const onSubmit = e => {
        e.preventDefault();
        if (inputvalue.trim().length < 1) return;
        // uso callback function de setCategories
        onNewCategory(inputvalue.trim());
        setInputvalue('');
    };

  return (
    <form onSubmit={onSubmit}>
    <input type="text" placeholder="Buscar GIFs" value={inputvalue} onChange={onInputChange}/>
    </form>
  )
}
