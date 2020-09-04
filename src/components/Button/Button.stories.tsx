import React from 'react';
import Button, { ButtonProps } from './index';

export default {
  title: 'Buttons',
};

export const Default = (props: ButtonProps) => <Button {...props} />;

export const CallToAction = (props: Partial<ButtonProps>) => (
  <Button {...props} variant="cta" />
);
export const Primary = (props: Partial<ButtonProps>) => (
  <Button {...props} variant="primary" />
);
export const Secondary = (props: Partial<ButtonProps>) => (
  <Button {...props} variant="secondary" />
);
