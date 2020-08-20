import React from 'react';
import Header, { HeaderProps } from './index';

export default {
  title: 'Header',
};

export const Default = (props: HeaderProps) => <Header {...props} />;
