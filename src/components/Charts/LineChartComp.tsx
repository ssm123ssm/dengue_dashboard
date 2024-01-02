"use client";

import {
  Area,
  CartesianGrid,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { DATETIME } from "@/utility/constants";
import { FC } from "react";
import moment from "moment";

interface Props {
  data: any[];
  keys: string[];
}

const colors = ["#0C4A6E", "#0EA5E9", "#075985"];

const LineChartComp: FC<Props> = ({ data = [], keys = [] }) => {
  return (
    <ResponsiveContainer height={250} width="100%">
      <ComposedChart
        data={data}
        margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#075985" stopOpacity={0.25}></stop>
            <stop offset="100%" stopColor="#075985" stopOpacity={0.04}></stop>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="x"
          tickLine={false}
          type="number"
          domain={["auto", "auto"]}
          tickFormatter={(unixTime) => moment.unix(unixTime).format("MMM")}
        />
        <Tooltip />
        {keys.map((x: string, i: number) => (
          <Line
            key={i}
            dataKey={x}
            type="monotone"
            strokeWidth={2}
            stroke={colors[i % colors.length]}
            dot={false}
          />
        ))}
        <Area dataKey="max" type="monotone" fill="url(#colorUv)" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default LineChartComp;
