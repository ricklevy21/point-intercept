import React, { useState } from 'react';

//COMPONENT NOT CURRENTLY BEING USED

const Dropdown = (label, defualtState, options) => {
  const [state, setState] = useState(defualtState)

  const DropdownMaker = () => (
    <label htmlFor={label}>
      {label}
        <select
        className="form-control" 
        id={label}
        value={state}
        onChange={e => setState(e.target.value)}
        onBlur={e=>setState(e.target.value)}
        disabled={!options.length}
        >
          <option></option>
          {options.map(item=>
          <option key={item} value={item}>{item}</option>)}
        </select>
    </label>
  )
  return [state, DropdownMaker, setState]
}

export default Dropdown