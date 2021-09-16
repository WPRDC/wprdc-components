import { BasemapStyle, ViewportOptions } from './types';

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

export const ASSETS_SOURCE_ID = 'w__assets';
export const ASSETS_LAYER_ID = 'w__assets';

export const PROFILES_SOURCE_ID = 'w__profiles';
export const PROFILES_LAYER = 'w__profiles';

export const censusFpsInExtent = [
  '003', // Allegheny county
  '019',
  '128',
  '007',
  '005',
  '063',
  '129',
  '051',
  '059',
  '125',
  '073',
]; // wrap them in quotes for easy use in sql queries

// for right now, we'll use sql, but if this gets more complex, we'll need a different solution
// this gets put in the SQL queries sent to carto for menuLayers geographies
export const censusFilter = `countyfp IN (${censusFpsInExtent
  .map((fp) => `'${fp}'`)
  .join(',')})`;
