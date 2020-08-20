/**
 *
 * DataCard types
 *
 **/

import React from 'react';
import { DataSource } from 'common/types';
import { DimensionValue } from '@react-types/shared';

export interface DataCardProps {
  id?: string;
  variant?: DataCardVariant;
  title?: string;
  titleAdornment?: React.ReactNode; // todo: tighten this to Adornments somehow
  note?: React.ReactNode;
  description?: React.ReactNode;
  sources?: DataSource[];
  contentHeight?: DimensionValue;
  contentWidth?: DimensionValue;
  children?: React.ReactChildren;
}

export type DataCardVariant = 'single' | 'multi';
