import React from "react";
//import json object that is list of species

export function HitInputSelect(props) {


  return (
    <div className="form-group">
      <input type="text" name="example" list="exampleList" className="form-control"/>
        <datalist id="exampleList">
        {
          props.filteredOptions !==undefined ? 
          (props.filteredOptions.map(filteredOption =>
          (<option key={filteredOption.id} value= {filteredOption.value}>{filteredOption.value}</option>)
          )):null
        }
        </datalist>

    </div>
  );
}