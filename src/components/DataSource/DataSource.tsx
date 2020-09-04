/**
 *
 * DataSource
 *
 * [ Displays and provides interactions for a citation ]
 *
 */

import React from 'react';

import { DataSourceProps } from './types';
import Link from '../Link';

export const DataSource: React.FC<DataSourceProps> = ({ url, name }) => (
  <Link external href={url} target="_blank">
    {name}
  </Link>
);

export default DataSource;
