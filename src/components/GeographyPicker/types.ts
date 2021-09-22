/**
 *
 * GeographyPicker types
 *
 **/
import { GeogBrief } from '../../types';
import { AriaFieldProps } from '@react-aria/label';
import { OverlayTriggerProps } from '@react-aria/overlays';

export interface GeographyPickerProps
  extends OverlayTriggerProps,
    AriaFieldProps,
    GeographyPickerMenuProps {}

export interface GeographyPickerMenuProps {
  variant?: 'default' | 'dialog' | 'popup';
  selectedGeog?: GeogBrief;
  onSelection?: (geog: GeogBrief) => any;
}

export interface GeographyPickerInputProps {}
