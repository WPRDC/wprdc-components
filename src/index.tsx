import React, { FC, HTMLAttributes, ReactChild } from 'react';

export { default as Button } from './components/Button';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
export const Thing: FC<Props> = ({ children }) => (
  <div>{children || `the snozzberries taste like snozzberries`}</div>
);
