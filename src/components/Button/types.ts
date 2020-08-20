/**
 *
 * Button types
 *
 **/
import { ReactNode } from 'react';
import { SpectrumButtonProps } from '@react-types/button';

export interface ButtonProps extends SpectrumButtonProps {
  label?: string;
  icon?: ReactNode;
}
