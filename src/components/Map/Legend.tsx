/**
 *
 * Legend
 *
 */
import React from 'react';
import styled from 'styled-components';
import { View, Text, Flex } from '@adobe/react-spectrum';
import { LegendItemProps, LegendProps } from 'components/Map/types';
import { BackgroundColorValue } from '@react-types/shared';

const ItemList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  & > li {
    padding-left: 0;
  }
`;

const Legend: React.FC<LegendProps> = ({ title, items }) => (
  <View
    padding="size-100"
    maxWidth="size-1700"
    backgroundColor="default"
    borderWidth="thick"
    borderRadius="medium"
  >
    <Text>{title}</Text>
    <ItemList>{items && items.map(item => <LegendItem {...item} />)}</ItemList>
  </View>
);

Legend.defaultProps = {
  title: 'Legend',
};

export default Legend;

export const LegendItem: React.FC<LegendItemProps> = ({ label, marker }) => {
  const renderedMarker =
    typeof marker === 'string' ? (
      <ColorMarker color={marker as BackgroundColorValue} />
    ) : (
      <View>marker</View>
    );
  return (
    <li>
      <Flex direction="row" alignContent="stretch" marginTop="size-100">
        {renderedMarker}
        <View marginStart="size-50">
          <Text>{label}</Text>
        </View>
      </Flex>
    </li>
  );
};

const ColorMarker: React.FC<{ color?: BackgroundColorValue }> = ({ color }) => (
  <View padding="size-50">
    <View
      borderRadius="small"
      backgroundColor={color}
      width="size-175"
      height="100%"
    />
  </View>
);
