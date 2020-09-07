/**
 *
 * Breadcrumbs types
 *
 */

import * as React from 'react';

import { SpectrumBreadcrumbsProps } from '@react-types/breadcrumbs';
import { ItemProps } from '@react-types/shared';

export interface BreadcrumbsProps extends SpectrumBreadcrumbsProps<unknown> {
  /** Items to render.  Will override `children`. */
  items?: BreadcrumbItemProps<unknown>[];
}
export interface BreadcrumbItemProps<T> extends ItemProps<T> {
  /** Replaces children */
  label?: React.ReactNode;
}
