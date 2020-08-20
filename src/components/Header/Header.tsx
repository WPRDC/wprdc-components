/**
 *
 * Header
 *
 * [ Container at teh top of sections or sites ]
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { View, Text } from '@adobe/react-spectrum';

import { HeaderProps } from './types'


export const Header: React.FC<HeaderProps> = ({...props}) => {
  const localVar;
  return (
    <View>
      <Text>Let's Rat!</Text>
    </View>
  );
};

Header.propTypes = { };

export default Header;