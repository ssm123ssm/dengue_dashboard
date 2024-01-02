"use client";

import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import { FC } from "react";

export interface PieChartValue {
  name: string;
  value: number;
}

interface Props {
  data: PieChartValue[];
}

const colors: string[] = [
  "#0EA5E9",
  "#7DD3FC",
  "#BAE6FD",
  "#E0F2FE",
  "#F0F9FF",
  "#821FF5",
  "#1D4D81",
  "#868C93",
  "#C439AE",
  "#777F1C",
  "#25DFB3",
  "#3AD437",
];

const PieChartComp: FC<Props> = ({ data = [] }) => {
  return (
    <ResponsiveContainer height={250} width="100%">
      <PieChart margin={{ top: 0, left: 0, right: 0, bottom: 0 }}>
        <Pie
          dataKey="value"
          data={data.map((x: PieChartValue, i: number) => {
            return {
              name: x.name,
              value: x.value,
              fill: colors[i % colors.length],
            };
          })}
          cx="50%"
          cy="50%"
          innerRadius={20}
          outerRadius={80}
        />
        <Tooltip />
        <Legend
          iconType="circle"
          formatter={(value, entry, index) => (
            <span style={{ color: "#475467" }}>{value}</span>
          )}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartComp;
