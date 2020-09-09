import React from "react";
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'


function LowerCanopyChart(props) {
    return (
        <>
        <br/>
        <br/>
        <h5>lower canopy taxon abundance</h5>
        <BarChart width={600} height={300} data={props.lowerCanopy}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="taxon" tick={false}/>
            <YAxis/>
            <Tooltip/>
            <Bar dataKey="secondHits" fill="#808080" />
      </BarChart>
      </>
    );
  }
export default LowerCanopyChart
