import React from "react";
import { Link } from 'react-router-dom'

export function ResumeBtn(props) {
  return (
    <Link to={{
      pathname: "/resume",
      // Can i pass data to a sibling(?) component here???
      // data: props.id
    }}
      >
      <button
      key={props.id}
      className="btn btn-dark"
      >
        Resume Project
      </button>
    </Link>
  );
}
