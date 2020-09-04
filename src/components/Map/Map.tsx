/**
 *
 * Map
 *
 * Display stuff on map :check:
 *
 *
 *
 */

import React from 'react';
import styled from 'styled-components';

import InteractiveMap, {
  NavigationControl,
  ViewportProps,
  ExtraState,
  ContextViewportChangeHandler,
  PointerEvent,
} from 'react-map-gl';

import { View, Flex } from '@adobe/react-spectrum';

import {
  MapProps,
  PopupContentComponent,
  UserPopupContentProps,
  ViewportOptions,
} from './types';
import { basemaps, DEFAULT_VIEWPORT, DEFAULT_BASEMAP_STYLE } from './settings';
import { hasFeatures } from './utils';
import Popup from './Popup';

const Map: React.FC<MapProps> = ({
  defaultViewport,
  basemapStyle,
  children,
  onViewportChange,
  onHover,
  onClick,
  optionsMenu,
  legends,
  hoverPopupContent,
  hoverPopupContentProps,
  clickPopupContent,
  clickPopupContentProps,
  useFeaturelessEvents,
  ...otherInteractiveMapProps
}) => {
  // Initialization
  const startingViewport = { ...DEFAULT_VIEWPORT, ...defaultViewport };

  // Internal state
  const [viewport, setViewport] = React.useState<ViewportOptions>(
    startingViewport,
  );
  const [hoverPopup, setHoverPopup] = React.useState<React.ReactNode>(
    undefined,
  );
  const [clickPopup, setClickPopup] = React.useState<React.ReactNode>(
    undefined,
  );

  // Theming
  const mapStyle = basemapStyle
    ? basemaps[basemapStyle]
    : DEFAULT_BASEMAP_STYLE;

  // Wrappers around commonly-used event handlers
  // todo: handle default behavior, and maybe some premade handlers to plug in in projects
  //        e.g. a hover popup that covers the most common use cases
  const handleViewportChange: ContextViewportChangeHandler = (
    viewState: ViewportProps,
    interactionState: ExtraState,
    oldViewState: ViewportProps,
  ) => {
    if (onViewportChange) {
      onViewportChange(viewState, interactionState, oldViewState);
    }
    setViewport(viewState);
  };

  const handleHover = (event: PointerEvent) => {
    if (useFeaturelessEvents || hasFeatures(event)) {
      if (onHover) {
        onHover(event);
      }
      if (hoverPopupContent) {
        setHoverPopup(
          _makePopup(hoverPopupContent, event, hoverPopupContentProps),
        );
      }
    }
  };

  const handleClick = (event: PointerEvent) => {
    if (useFeaturelessEvents || hasFeatures(event)) {
      if (onClick) {
        onClick(event);
      }
      if (clickPopupContent) {
        setClickPopup(
          _makePopup(clickPopupContent, event, clickPopupContentProps),
        );
      }
    }
  };

  const _makePopup = (
    ContentComponent: PopupContentComponent,
    event: PointerEvent,
    userProps?: UserPopupContentProps,
  ) => (
    <Popup longitude={event.lngLat[0]} latitude={event.lngLat[1]}>
      <ContentComponent
        event={event}
        features={event.features}
        primaryFeatureProps={event.features[0].properties}
        {...userProps}
      />
    </Popup>
  );

  const StyleProvider = styled.div`
    .mapboxgl-popup-content {
      background: none;
      border: none;
    }
  `;

  return (
    <InteractiveMap
      {...viewport}
      mapStyle={mapStyle}
      onHover={handleHover}
      onClick={handleClick}
      onViewportChange={handleViewportChange}
      {...otherInteractiveMapProps}
    >
      <StyleProvider>
        {hoverPopup}
        {clickPopup}
      </StyleProvider>
      {children}
      <View
        id="mapControls"
        position="absolute"
        top="size-150"
        right="size-150"
      >
        <Flex direction="row">
          <View marginX="size-150">{optionsMenu}</View>
          <View>
            <NavigationControl />
          </View>
        </Flex>
      </View>

      <View
        id="mapLegends"
        position="absolute"
        bottom="size-400"
        right="size-200"
      >
        {legends}
      </View>
    </InteractiveMap>
  );
};

Map.defaultProps = {
  basemapStyle: 'light',
};

export default Map;
