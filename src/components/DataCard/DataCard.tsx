/**
 *
 * DataCard
 *
 * [ Card with primary content area for data visualizations. ]
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from '@adobe/react-spectrum';
import { getPropTypes } from 'prop-types-ts';

import { DataCardProps } from './types';
import { dataSourcePropType } from 'common/types';

export const DataCard: React.FC<DataCardProps> = props => (
  <View id={id}>
    <Heading></Heading>
    <Text>Let's Rat!</Text>
  </View>
);

DataCard.propTypes = getPropTypes(DataCardProps);

export default DataCard;
