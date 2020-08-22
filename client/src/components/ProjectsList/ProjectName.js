import React from "react";
import { PromiseProvider } from "mongoose";

export function ProjectName(props) {
  console.log(props)
  return (
    <h3 key={props.id} >
      {props.project}
    </h3>
  );
}
