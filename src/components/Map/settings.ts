import { BasemapStyle, ViewportOptions } from 'components/Map/types';

export const CARTO_USER = 'wprdc';

export const MAPS_API_ENDPOINT = `https://${CARTO_USER}.carto.com/api/v1/map`;

/** Viewport centered on Pittsburgh */
export const DEFAULT_VIEWPORT: ViewportOptions = {
  width: '100%',
  height: '100%',
  latitude: 40.440624,
  longitude: -79.995888,
  zoom: 12,
};

export const basemaps: Record<BasemapStyle, string> = {
  dark: 'mapbox://styles/stevendsaylor/ckd6iq0n702if1inv6rbbq5bg', // Basic/Dark
  light: 'mapbox://styles/stevendsaylor/ckd6ixslm00461iqqn1hltgs8', // Basic/Light
  streets: 'mapbox://styles/mapbox/streets-v11',
};

export const DEFAULT_BASEMAP_STYLE = basemaps.light;
