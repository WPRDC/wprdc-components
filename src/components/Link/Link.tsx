/**
 *
 * Link
 *
 * [ Hyperlink.  Light wraper around anchor element. ]
 *
 */

import React from 'react';
import { Link as RSLink } from '@adobe/react-spectrum';

import { LinkProps } from './types';

import extIcon from './images/ext.svg';

export const Link: React.FC<LinkProps> = ({
  children,
  href,
  target,
  linkProps,
  external,
  ...anchorProps
}) => (
  <RSLink {...linkProps}>
    <a
      href={href}
      target={target}
      rel={target === '_blank' ? 'noreferrer noopener' : ''}
      {...anchorProps}
    >
      {children}
      {external && <img src={extIcon} alt="to external site" />}
    </a>
  </RSLink>
);

export default Link;
