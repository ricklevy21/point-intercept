import React from "react";


// COMPONENT NOT CURRENTLY IN USE

export function NextPointBtn({ setPoint, statePoint }) {
    //function to increment point value and set
    function incrementPoint(){
        let point = 0
        let nextPoint = point + 0.25
        console.log(nextPoint)
        setPoint({ ...statePoint, point})
    };
  return (
    <button
    id="nextPoint"
    style={{ float: "right", marginBottom: 10 }}
    className="btn btn-lg btn-dark btn-block"
    onClick={incrementPoint}
    >
        Next Point
    </button>
  );
}
