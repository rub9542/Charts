import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Page A",
    sv:3000, uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    sv:3900, uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    sv:4000, uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    sv:4200, uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    sv:3500, uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    sv:2000, uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    sv:3200, uv: 3490,
    pv: 4300,
    amt: 2100
  },{
    name: "Page H",
    sv:3500, uv: 2000,
    pv: 2800,
    amt: 2290
  },
//   {
//     name: "Page D",
//     sv:3800, uv: 2780,
//     pv: 3908,
//     amt: 2000
//   },
//   {
//     name: "Page E",
//     sv:4500, uv: 1890,
//     pv: 4800,
//     amt: 2181
//   },
//   {
//     name: "Page F",
//     sv:3500, uv: 2390,
//     pv: 3800,
//     amt: 2500
//   },
//   {
//     name: "Page G",
//     sv:4000, uv: 3490,
//     pv: 4300,
//     amt: 2100
//   },{
//     name: "Page C",
//     sv:3700, uv: 2000,
//     pv: 9800,
//     amt: 2290
//   }
//   {
//     name: "Page D",
//     sv:3000, uv: 2780,
//     pv: 3908,
//     amt: 2000
//   },
//   {
//     name: "Page E",
//     sv:3500, uv: 1890,
//     pv: 4800,
//     amt: 2181
//   },
//   {
//     name: "Page F",
//     sv:3700, uv: 2390,
//     pv: 3800,
//     amt: 2500
//   },
//   {
//     name: "Page G",
//     sv:3000, uv: 3490,
//     pv: 4300,
//     amt: 2100
//   }
];

export default function LineSample() {
  return (
    <LineChart
      width={500}
      height={300}
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
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
        
      />
   
      <Line
        type="monotone"
        dataKey="sv"
        stroke="#383ff6"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
  );
}