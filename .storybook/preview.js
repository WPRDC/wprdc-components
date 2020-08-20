// .storybook/preview.js

import React from 'react'
import SpectrumProvider from './SpectrumProvider';

export const decorators = [(Story) => <SpectrumProvider><Story/></SpectrumProvider>];

// .storybook/preview.js
import { themes } from '@storybook/theming';

export const parameters = {
  docs: {
    theme: themes.dark,
  },
};