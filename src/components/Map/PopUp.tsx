import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Popup } from 'react-map-gl';
import { View, Flex, Text } from '@adobe/react-spectrum';
// import styled, {css} from 'styled-components';

const Description = styled.span`
  font-size: 86%;
`;

export interface PopUpProps {
  id: string | number;
  title?: React.ReactNode;
  lat: number;
  lng: number;
  onClose: () => void;
}

function PopUp({ title, id, lat, lng, onClose }: PopUpProps) {
  return (
    <Popup
      latitude={lat}
      longitude={lng}
      closeOnClick={false}
      onClose={onClose}
      closeButton={false}
      tipSize={0}
      anchor="bottom"
      offsetTop={-10}
    >
      <View
        backgroundColor="default"
        borderWidth="thin"
        borderColor="dark"
        borderRadius="medium"
        padding="size-100"
        margin={0}
      >
        <Flex direction="row">
          <View paddingEnd="size-150" paddingTop="size-100">
            <CategoryIcon categorySlug={slug} size="M" />
          </View>
          <View>
            <View>
              <Text>{name}</Text>
            </View>
            <View>
              <Text>
                <Description>{type}</Description>
              </Text>
            </View>
          </View>
        </Flex>
      </View>
    </Popup>
  );
}

PopUp.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  type: PropTypes.string,
  lat: PropTypes.number,
  lng: PropTypes.number,
  onClose: PropTypes.func,
};

export default PopUp;
