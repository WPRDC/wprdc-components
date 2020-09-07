/**
 *
 * Button
 *
 * [ For clickin! ]
 *
 */

import React from 'react';
import { Text, Button as RSButton } from '@adobe/react-spectrum';

import { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = ({ label, icon, ...props }) => (
  <RSButton {...props}>
    {icon}
    <Text>{label || 'Button'}</Text>
  </RSButton>
);

export default Button;
