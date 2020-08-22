import React from "react";
import { PromiseProvider } from "mongoose";

export function ViewDataBtn(props) {
  return (
    <button
    key={props.id}
    className="btn btn-dark">
     Get Data
    </button>
  );
}
