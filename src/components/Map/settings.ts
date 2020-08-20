import { ViewportProps } from 'react-map-gl';
import { ViewportOptions } from 'components/Map/types';

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

/**
 * Generates Mapbox expression that colors map points based on category
 * @param colorScheme
 * @returns {(string|string[]|string)[]}
 */
const colorExpression = colorScheme => [
  'match',
  ['get', 'category'],
  ...Object.entries(categoryColors(colorScheme)).reduce(
    (expression, [cat, color]) => [...expression, [cat], color],
    [],
  ),
  'hsl(0, 0%, 0%)',
];

const assetLayer = colorScheme => ({
  id: 'asset-points',
  source: 'assets',
  'source-layer': 'assets',
  type: 'circle',
  paint: {
    'circle-radius': [
      'interpolate',
      ['cubic-bezier', 0.5, 0, 0.5, 1],
      ['zoom'],
      8,
      1,
      22,
      12,
    ],
    'circle-color': colorExpression(colorScheme),
    'circle-stroke-width': 1,
    'circle-stroke-opacity': {
      stops: [
        [0, 0],
        [9, 0],
        [12, 0.1],
        [14, 0.3],
      ],
    },
  },
});

/**
 * Returns themed map layer and corresponding set of colors for use in overlays.
 * @param {string} colorScheme
 * @returns {{categoryColors: {business: string, housing: string, 'education/youth': string, 'non-profit': string, health: string, 'community-center': string, food: string, civic: string, transportation: string}, assetLayer: {paint: {'circle-color': *, 'circle-radius': (string|(string|number)[]|string[]|number)[]}, id: string, source: string, 'source-layer': string, type: string}}}
 */
export function getTheme(colorScheme) {
  return {
    assetLayer: assetLayer(colorScheme),
    categoryColors: categoryColors(colorScheme),
  };
}

export const DEFAULT_BASEMAP = basemaps.dark;
