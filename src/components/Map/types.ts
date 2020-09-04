import {
  InteractiveMapProps,
  LayerProps,
  PointerEvent,
  ViewState,
} from 'react-map-gl';
import React from 'react';

import { BackgroundColorValue, ViewStyleProps } from '@react-types/shared';

export type MapFormat = 'vector' | 'raster';
export type BasemapStyle = 'light' | 'dark' | 'streets';

import { PopupProps as RMGPopupProps } from 'react-map-gl';

import * as GeoJSON from 'GeoJSON';
import { Geometry } from 'geojson';

export type Feature = GeoJSON.Feature;

export interface ViewportOptions extends ViewState {
  /** Width of viewport valid css height value string or number of pixels */
  width: string | number;

  /** Height of viewport valid css height value string or number of pixels */
  height: string | number;
}

export interface MapProps extends InteractiveMapProps {
  /** Viewport to use on first render */
  defaultViewport?: ViewportOptions;

  /**
   * ID of the mapbox style to use as a basemap.
   * @default 'light'
   * */
  basemapStyle?: BasemapStyle;

  /** Overlay(s) for custom controls to display in the options slot (directly left of map controls) */
  optionsMenu?: React.ReactNode | React.ReactNodeArray;

  /** Overlay(s) to display in the legend slot (bottom right) */
  legends?: React.ReactNode | React.ReactNodeArray;

  /** */
  hoverPopupContent?: PopupContentComponent;

  /** */
  hoverPopupContentProps?: UserPopupContentProps;

  /** Component to render */
  clickPopupContent?: PopupContentComponent;

  /** */
  clickPopupContentProps?: UserPopupContentProps;

  /**
   * When true, event handlers will not ignore `PointerEvents` that do not have any associated feature data.
   * @default false
   */
  useFeaturelessEvents?: boolean;

  /**
   * [react-map-gl](http://visgl.github.io/react-map-gl/docs) components.
   *
   * Primarily [`Source`s](http://visgl.github.io/react-map-gl/docs/api-reference/source)
   * and [`Layer`s](http://visgl.github.io/react-map-gl/docs/api-reference/layer)
   */
  children?: React.ReactNode | React.ReactNodeArray;
}

export interface LegendProps extends ViewStyleProps {
  title?: React.ReactNode;
  items: LegendItemProps[];
}

export interface LegendItemProps {
  /** The text or component that describes the item */
  label: React.ReactNode;
  /** Icon or image. if css color string provided, a circle of that color will be used */
  marker: React.ReactNode | BackgroundColorValue;
}

export type PopupProps = RMGPopupProps;

export interface PopupContentProps<
  G extends Geometry | null = Geometry,
  P = GeoJSON.GeoJsonProperties
> {
  /** Event responsible for this popup. */
  event: PointerEvent;
  /**
   * The features associated withe the event.
   * (shortcut - should be set `event.features`
   */
  features: GeoJSON.Feature<G, P>[] | unknown[];
  /**
   * The `properties` attached to the first feature from `event.features`.
   *  (shortcut - should be same as `event.features[0].properties]
   */
  primaryFeatureProps: P;
}

export type PopupContentComponent<
  P extends PopupContentProps = PopupContentProps
> = React.FC<P>;

export interface LayerOptions extends LayerProps {
  /**
   * necessary for instantiating maps in carto
   * (usually same value as `source`)
   * */
  'source-layer': string;
}

export interface UserPopupContentProps {
  getLabel?: (eventData: PopupContentProps) => React.ReactNode;
  getDescription?: (eventData: PopupContentProps) => React.ReactNode;
  getIcon?: (eventData: PopupContentProps) => React.ReactNode;
}

export type ExtendedPopupContentProps = PopupContentProps &
  UserPopupContentProps;
