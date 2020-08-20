import React from 'react';
// import PropTypes from 'prop-types';

import logo from '../../images/logos/wprdc.svg';

import Footer from './index';

import { View, Text, Grid, repeat, minmax } from '@adobe/react-spectrum';

const SimpleFooter: React.FC = props => (
  <Footer {...props}>
    <View width="100%">
      <Grid
        columns={repeat('auto-fill', [
          minmax('static-size-1600', 'static-size-5000'),
          minmax('static-size-1600', 'static-size-5000'),
        ])}
        justifyContent="center"
        gap="size-100"
      >
        <View borderColor="celery-400" borderWidth="thick">
          <img src={logo} alt="WPRDC logo"></img>
        </View>
        <View borderColor="purple-400" borderWidth="thick">
          <Text>Stuff</Text>
        </View>
      </Grid>
    </View>
  </Footer>
);

export default SimpleFooter;
