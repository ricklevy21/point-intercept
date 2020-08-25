import React from "react"
import { Link } from 'react-router-dom'

export function StartBtn(props) {
    console.log(props)
  return (
    <Link to={`/record/${props.transect}`}
    >
    <button style={{ float: "right", marginBottom: 10 }} className="btn btn-lg btn-dark btn-block">
      {props.children}
    </button>
    </Link>
  );
}
