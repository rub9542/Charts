
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },{
    name: "A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "B",
    uv: 4300,
    pv: 1398,
    amt: 2210
  },
  {
    name: "C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },{
    name: "F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },{
    name: "F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },{
    name: "F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },{
    name: "F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },{
    name: "F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },{
    name: "F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },{
    name: "F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

function BarSample() {
  return (
    <BarChart
      width={500}
      height={500}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="uv" fill="#383ff6" />
    </BarChart>
  );
}
export default BarSample;