/**
 *
 * Footer
 *
 * [ Container at the bottom of sections or sites. ]
 *
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { Footer as RSFooter } from '@adobe/react-spectrum';

import { FooterProps } from './types';

export const Footer: React.FC<FooterProps> = props => (
  <RSFooter {...props}>{props.children}</RSFooter>
);

Footer.propTypes = { ...RSFooter.propTypes };

export default Footer;
