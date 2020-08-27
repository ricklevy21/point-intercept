import React from "react";

export function NextPointBtn({ setPoint, statePoint }) {
    //function to increment point value
    function incrementPoint(){
        let point = 0
        // let nextPoint = point + 0.25
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
