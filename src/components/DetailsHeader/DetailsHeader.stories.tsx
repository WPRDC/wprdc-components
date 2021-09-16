import React from 'react';
import { DetailsHeader , DetailsHeaderProps } from './';
import { Story } from '@storybook/react';

export default {
  title: 'DetailsHeader',
  component: DetailsHeader,
};

const Template: Story<DetailsHeaderProps> = (args) => <DetailsHeader {...args} />;

export const Primary = Template.bind({});
Primary.args = { };

export const Secondary = Template.bind({});
Secondary.args = { };
