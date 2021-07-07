import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "21 June 2021",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "22 June 2021",
    uv: -3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "23 June 2021",
    uv: -2000,
    pv: -9800,
    amt: 2290,
  },
  {
    name: "24 June 2021",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "25 June 2021",
    uv: -1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "26 June 2021",
    uv: 2390,
    pv: -3800,
    amt: 2500,
  },
  {
    name: "27 June 2021",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/bar-chart-stacked-by-sign-cbct8";

  render() {
    return (
      <ResponsiveContainer width="100%" height="90%" className="mb-3">
        <BarChart
          width={500}
          height={300}
          data={data}
          stackOffset="sign"
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <ReferenceLine y={0} stroke="#000" />
          <Bar dataKey="pv" fill="#008FFF" stackId="stack" barSize={10} />
          <Bar dataKey="uv" fill="#DB0038" stackId="stack" barSize={10} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
