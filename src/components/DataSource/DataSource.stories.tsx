import React from 'react';
import DataSource from './index';

export default {
  title: 'DataSource',
};

export const Default = () => (
  <DataSource
    name="Allegheny County Dog Licenses"
    url="https://data.wprdc.org/dataset/allegheny-county-dog-licenses"
  />
);
