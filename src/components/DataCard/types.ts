/**
 *
 * DataCard types
 *
 **/

import React from 'react';
import { DataSource } from 'common/types';
import { ViewStyleProps } from '@react-types/shared';

export interface DataCardHeaderProps {
  variant?: DataCardVariant;
  title?: string;
  titleAdornment?: React.ReactNode; // todo: tighten this to Adornments somehow
  headingLvl?: 1 | 2 | 3 | 4 | 5 | 6;
}

export interface DataCardProps extends DataCardHeaderProps {
  id?: string;
  note?: React.ReactNode;
  description?: React.ReactNode;
  sources?: DataSource[];
  viewStyleProps?: ViewStyleProps;
  contentViewStyleProps?: ViewStyleProps;
  descriptionViewStyleProps?: ViewStyleProps;
  noteViewStyleProps?: ViewStyleProps;
  sourcesViewStyleProps?: ViewStyleProps;
}

export type DataCardVariant = 'single' | 'multi';
