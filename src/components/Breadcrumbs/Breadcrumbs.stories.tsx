import React from 'react';
import { Item } from '@adobe/react-spectrum';
import Breadcrumbs from './index';

export default {
  title: 'Breadcrumbs',
};

export const Default = () => (
  <Breadcrumbs>
    <Item>Earth</Item>
    <Item>United States</Item>
    <Item>Pennsylvania</Item>
    <Item>Pittsburgh</Item>
  </Breadcrumbs>
);
