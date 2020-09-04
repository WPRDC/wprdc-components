import React from 'react';
import styled from 'styled-components';
import { Popup as RMGPopup } from 'react-map-gl';
import { View, Text, Flex } from '@adobe/react-spectrum';
import {
  Feature,
  PopupContentComponent,
  PopupProps,
  ExtendedPopupContentProps,
} from 'components/Map/types';

const Popup: React.FC<PopupProps> = ({
  latitude,
  longitude,
  onClose,
  children,
  ...otherProps
}) => (
  <RMGPopup
    latitude={latitude}
    longitude={longitude}
    closeOnClick={false}
    onClose={onClose}
    closeButton={false}
    tipSize={0}
    anchor="bottom"
    offsetTop={-10}
    {...otherProps}
  >
    <View
      backgroundColor="default"
      borderWidth="thin"
      borderColor="dark"
      borderRadius="medium"
      paddingY="size-50"
      paddingX="size-75"
      margin={0}
    >
      {children}
    </View>
  </RMGPopup>
);

export const SimpleLabelPopupContent: PopupContentComponent<ExtendedPopupContentProps> = ({
  event,
  features,
  primaryFeatureProps,
  getLabel = ({ primaryFeatureProps }) =>
    primaryFeatureProps && primaryFeatureProps['name'],
}) => <Text>{getLabel({ event, features, primaryFeatureProps })}</Text>;

export const SimpleLabelListPopupContent: PopupContentComponent<ExtendedPopupContentProps> = ({
  event,
  features,
  primaryFeatureProps,
  getLabel = ({ features }) =>
    (features as Feature[]).map(feature => (
      <li>{feature.properties && <Text>{feature.properties['name']}</Text>}</li>
    )),
}) => {
  const Ul = styled.ul`
    padding: 0;
    list-style: none;
    margin: 0;
  `;
  return <Ul>{getLabel({ event, features, primaryFeatureProps })}</Ul>;
};

export const DetailedLabelPopupContent: PopupContentComponent<ExtendedPopupContentProps> = ({
  event,
  features,
  primaryFeatureProps,
  getLabel = ({ primaryFeatureProps }) =>
    primaryFeatureProps && <Text>{primaryFeatureProps['name']}</Text>,
  getDescription = ({ primaryFeatureProps }) =>
    primaryFeatureProps && (
      <Text>{primaryFeatureProps['asset_type_title']}</Text>
    ),
  getIcon,
}) => (
  <Flex>
    <View marginEnd="size-50">
      {!!getIcon && getIcon({ event, features, primaryFeatureProps })}
    </View>

    <View>
      {!!primaryFeatureProps && [
        <View>{getLabel({ event, features, primaryFeatureProps })}</View>,
        <View UNSAFE_style={{ opacity: 0.7 }}>
          {getDescription({ event, features, primaryFeatureProps })}
        </View>,
      ]}
    </View>
  </Flex>
);

export default Popup;
