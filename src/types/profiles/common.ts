/*
 *
 * Common types
 *
 */
import * as React from 'react';

export interface Described<K extends string | number = string | number> {
  id: K;
  name: string;
  slug: string;
  description?: string;
}

export type Datum = number | string | React.ReactNode;
