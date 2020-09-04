/**
 *
 * List
 *
 * [ List of stuff ]
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { View, Text } from '@adobe/react-spectrum';

import { ListProps } from './types'


export const List: React.FC<ListProps> = ({...props}) => {
  const localVar;
  return (
    <View>
      <Text>Let's Rat!</Text>
    </View>
  );
};

List.propTypes = { };

export default List;