import React from 'react';
import DataCard from './index';
import { DataCardProps } from 'components/DataCard/types';

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

export default {
  title: 'DataCard',
};

export const Default: React.FC<DataCardProps> = () => {
  const tableData = [
    { label: 'Mario', value: 2 },
    { label: 'Luigi', value: 4 },
    { label: 'Peach', value: 3 },
    { label: 'Toad', value: 1 },
    { label: 'Yoshi', value: 3 },
  ];

  const ExampleTable = () => (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={tableData}
        margin={{ top: 5, right: 5, bottom: 5, left: 0 }}
      >
        <XAxis dataKey="label" />
        <YAxis width={20} />
        <Tooltip />
        <Bar name="Height" dataKey="value" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );

  return (
    <DataCard
      title="Approximate Height of Mario Characters"
      note="Measured in 100s of pixels"
      description=""
      sources={[
        { url: 'https://data.wprdc.org/', name: 'Steve et. al. (2020)' },
      ]}
      viewStyleProps={{ maxWidth: 'size-4600', margin: 'size-200' }}
    >
      <ExampleTable />
    </DataCard>
  );
};
