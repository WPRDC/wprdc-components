import * as React from 'react';
import { ErrorMessage, ErrorMessageProps } from '.';
import { Story } from '@storybook/react';

export default {
  title: 'ErrorMessage',
  component: ErrorMessage,
};

const Template: Story<ErrorMessageProps> = (args) => <ErrorMessage {...args} />;

export const Inline = Template.bind({});
Inline.args = {
  title: 'Uh oh!',
  message: "Look what you've done!",
};

export const Centered = Template.bind({});
Centered.args = {
  title: 'Uh oh!',
  message:
    "Look what yo dafdsfadfasdfas dfasdfasdfasfgfdgsdfgsfgs fdfasdu've done!",
  variant: 'centered',
};
