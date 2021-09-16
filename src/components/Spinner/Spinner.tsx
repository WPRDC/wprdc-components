/**
 *
 * Spinner
 *
 * Indeterminate loading spinner
 *
 */
import * as React from 'react';
import '../../styles/global.css';

import { SpinnerProps } from './types';
import { FadeLoader } from 'react-spinners';
import { SizeCategory } from '../../types';
import { LoaderHeightWidthRadiusProps } from 'react-spinners/interfaces';

export const Spinner: React.FC<SpinnerProps> = ({ size, ...props }) => {
  const sizeStyle = sizeStyles[size || 'M'];
  return (
    <FadeLoader
      {...props}
      {...sizeStyle}
      css="display: block; margin: 0 auto;"
    />
  );
};

const sizeStyles: Record<SizeCategory, LoaderHeightWidthRadiusProps> = {
  S: { width: 5, radius: 2, height: 15 },
  M: { width: 5, radius: 2, height: 15 },
  L: { width: 5, radius: 2, height: 15 },
};

export default Spinner;
