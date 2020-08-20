/**
 *
 * Button
 *
 * [ For clickin! ]
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Text, Button as RSButton } from '@adobe/react-spectrum';

import { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = ({ label, icon, ...props }) => (
  <RSButton {...props}>
    <Text>{label || 'Button'}</Text>
  </RSButton>
);

Button.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string,
};

export default Button;
