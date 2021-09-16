import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import { ConnectedAssetDetails, ConnectedAssetDetailsProps } from '.';

export default {
  title: 'AssetDetails',
  component: ConnectedAssetDetails,
} as Meta;

const Template: Story<ConnectedAssetDetailsProps> = (args) => (
  <ConnectedAssetDetails {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  id: 204270,
  name: "Essie's Original Hot Dog Shop",
  headingLevel: 1,
};
