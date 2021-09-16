/**
 *
 * InfoButton types
 *
 **/
import * as React from 'react';
import { OverlayTriggerProps } from '@react-types/overlays';

export interface InfoButtonProps extends OverlayTriggerProps {
  title?: string;
  variant?: 'line';
  content?: React.ReactNode;
}
