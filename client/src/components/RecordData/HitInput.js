import React from "react";

export function HitInput(props) {
  return (
    <div className="form-group">
        <select>
            <option value="Poa">Poa</option>
            <option value="Carex">Carex</option>
            <input
                className="form-control"
            {...props} />
        </select>
    </div>
  );
}