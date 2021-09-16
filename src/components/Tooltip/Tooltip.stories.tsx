import React from 'react';
import { Tooltip, TooltipPopoverProps } from './';
import { Story } from '@storybook/react';

export default {
  title: 'Tooltip',
  component: Tooltip,
};

const Template: Story<TooltipPopoverProps> = (args) => <Tooltip {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {};
