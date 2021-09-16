/**
 *
 * Dialog types
 *
 **/
import { OverlayProps } from '@react-aria/overlays';
import { AriaDialogProps } from '@react-types/dialog';
import { HeadingLevel } from '../Heading';

export interface DialogProps extends AriaDialogProps, OverlayProps {
  title?: string;
  withCloseButton?: boolean;
  size?: 'S' | 'M' | 'L' | 'XL' | 'Full';
  titleHeadingLevel?: HeadingLevel;
}
