import React from "react";
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'


function MeanValuesChart(props) {
    console.log(`Props: ${props.chartData}`)
    return (
    	<BarChart width={600} height={300} data={props.chartData}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <CartesianGrid strokeDasharray="3 3"/>
       <XAxis dataKey="name"/>
       <YAxis/>
       <Tooltip/>
       <Legend />
       <Bar dataKey="meanSoilMoisture" fill="#8884d8" />
       <Bar dataKey="meanCanopyScore" fill="#82ca9d" />
       <Bar dataKey="meanShrubDensity" fill="#82ca9d" />
      </BarChart>
    );
  }
export default MeanValuesChart
