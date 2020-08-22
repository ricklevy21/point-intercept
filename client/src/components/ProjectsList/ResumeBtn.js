import React from "react";
import { Link } from 'react-router-dom'

export function ResumeBtn(projects) {
  return (
    <Link to={{
      pathname: "/resume",
      // Can i pass data to a sibling(?) component here???
      data: projects._id
    }}
      >
      <button
      key={projects._id}
      className="btn btn-dark"
      >
        Resume Project
      </button>
    </Link>
  );
}
