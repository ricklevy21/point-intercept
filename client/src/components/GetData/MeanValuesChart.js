import React from "react";
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'


function MeanValuesChart(props) {
    console.log(`Props: ${props.chartData}`)
    return (
    	<BarChart width={600} height={300} data={props.chartData}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <CartesianGrid strokeDasharray="3 3"/>
       <XAxis dataKey="transectName"/>
       <YAxis/>
       <Tooltip/>
       <Legend />
       <Bar dataKey="meanSoilMoisturePercentage" fill="#000000" />
       <Bar dataKey="meanCanopyScore" fill="#808080" />
       <Bar dataKey="meanShrubDensity" fill="#C0C0C0" />
      </BarChart>
    );
  }
export default MeanValuesChart
