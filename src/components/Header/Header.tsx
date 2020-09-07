/**
 *
 * Header
 *
 * [ Container at teh top of sections or sites ]
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { Header as RSHeader } from '@adobe/react-spectrum';

import { HeaderProps } from './types';

export const Header: React.FC<HeaderProps> = ({ children, ...props }) => (
  <RSHeader {...props}>{children}</RSHeader>
);

export default Header;
