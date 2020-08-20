import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Button from '../src/components/Button';
import {
  Provider,
  defaultTheme,
  Button as RSButton,
  Text,
} from '@adobe/react-spectrum';

const App = () => (
  <Provider
    theme={defaultTheme}
    UNSAFE_style={{ height: '100%', width: '100%' }}
  >
    <div style={{ height: '100%', width: '100%' }}>
      <RSButton variant="primary">
        <Text>hey</Text>
      </RSButton>
    </div>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
