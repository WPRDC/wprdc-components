import React from 'react';
import { IndicatorComparisonView , IndicatorComparisonViewProps } from './';
import { Story } from '@storybook/react';

export default {
  title: 'IndicatorComparisonView',
  component: IndicatorComparisonView,
};

const Template: Story<IndicatorComparisonViewProps> = (args) => <IndicatorComparisonView {...args} />;

export const Primary = Template.bind({});
Primary.args = { };

export const Secondary = Template.bind({});
Secondary.args = { };
