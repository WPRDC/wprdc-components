/**
 *
 * Link types
 *
 **/
import { AnchorHTMLAttributes } from 'react';
import { PressEvent } from '@react-types/shared';

export interface LinkProps extends AnchorHTMLAttributes<Element> {
  /** indicates link to external resource and styles the link appropriately */
  external?: boolean;
  /** escape hatch for accessing React Spectrum's `Link` props. */
  linkProps?: PressEvent;
}
