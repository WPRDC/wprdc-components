import React from 'react';
import { InfoButton, InfoButtonProps } from './';
import { Story } from '@storybook/react';

export default {
  title: 'InfoButton',
  component: InfoButton,
};

const Template: Story<InfoButtonProps> = (args) => <InfoButton {...args} />;

const content = (
  <div>
    <h2 className="font-medium text-lg">Information</h2>
    <p className="text-sm">
      Particles die with ellipse at the quirky universe! Delighted captains, to
      the cabin.
    </p>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  content,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'line',
  content,
};
