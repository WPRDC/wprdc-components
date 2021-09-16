/**
 *
 * Spinner types
 *
 **/
import { LoaderHeightWidthRadiusProps } from 'react-spinners/interfaces';
import { SizeCategory } from '../../types';

export interface SpinnerProps extends LoaderHeightWidthRadiusProps {
  size?: SizeCategory;
}
