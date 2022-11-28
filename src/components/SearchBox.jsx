import React, { useContext, useState } from 'react'
import todoContext from '../Context';

const SearchBox = () => {
  const context = useContext(todoContext);
  const { addItem } = context;
  const [input, setInput] = useState("")
  function AddItem() {
    addItem(input)
    setInput('');
  }
    
  return (
    <div className='search'>
        <input type="text" onChange={(e) => setInput(e.target.value)} value={input} placeholder='add details' />
        <button onClick={AddItem}>Add</button>
    </div>
  )
}

export default SearchBox