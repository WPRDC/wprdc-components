import { LayerProps, SourceProps, ViewState } from 'react-map-gl';
import React from 'react';

export interface ViewportOptions extends ViewState {
  width: string | number;
  height: string | number;
}

export type MapFormat = 'vector' | 'raster';

export interface MapProps {
  defaultViewport: ViewportOptions;
  sources: Array<SourceProps>;
  layers: Array<LayerProps>;
  basemapStyle: BasemapStyle;
  isStatic: boolean;
  children?: React.ReactNode | React.ReactNodeArray;
}

/** Mapbox style URIs for our basemaps */
export enum BasemapStyle {
  Dark = 'mapbox://styles/stevendsaylor/ckd6iq0n702if1inv6rbbq5bg', // Basic/Dark
  Light = 'mapbox://styles/stevendsaylor/ckd6ixslm00461iqqn1hltgs8', // Basic/Light
  Streets = 'mapbox://styles/mapbox/streets-v11',
}
