import React from "react";

export function ViewDataBtn(projects) {
  return (
    <button
    key={projects._id}
    className="btn btn-dark">
     Get Data
    </button>
  );
}
