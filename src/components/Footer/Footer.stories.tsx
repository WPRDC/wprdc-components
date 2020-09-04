import React from 'react';
import Footer, { FooterProps } from './index';

import { Text } from '@adobe/react-spectrum';
import SimpleFooter from './SimpleFooter';

export default {
  title: 'Footer',
};

export const Default: React.FC<FooterProps> = props => (
  <Footer {...props}>
    <Text marginX="size-200" marginY="size-150">
      &copy; 2020 Western PA Regional Data Center
    </Text>
  </Footer>
);

export const Simple: React.FC<FooterProps> = props => (
  <SimpleFooter {...props} />
);
