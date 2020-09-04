import React from 'react';
import Map, { MapProps, Legend } from './index';
import { ActionButton, Text } from '@adobe/react-spectrum';
import { LayerOptions, LegendItemProps } from './types';
import { DetailedLabelPopupContent, SimpleLabelPopupContent } from './Popup';
import { Layer, Source, SourceProps } from 'react-map-gl';
import { fetchCartoVectorSource } from './utils';
import Train from '@spectrum-icons/workflow/Train';
import Shop from '@spectrum-icons/workflow/Shop';
export default {
  title: 'Map',
};

export const Default: React.FC = () => {
  const [source, setSource] = React.useState<SourceProps>();

  const legendItems: LegendItemProps[] = [
    { label: 'Cats', marker: 'green-600' },
    { label: 'Dogs', marker: 'blue-600' },
  ];

  const layer: LayerOptions = {
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
      'circle-color': 'aliceblue',
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
  };

  const sourceSQL = `SELECT id, cartodb_id, name, asset_type, asset_type_title,category, the_geom, the_geom_webmercator FROM wprdc.assets_v1`;

  const defaultProps: MapProps = {
    mapboxApiAccessToken:
      'pk.eyJ1Ijoic3RldmVuZHNheWxvciIsImEiOiJja2VhZmJybHMwMDFpMzJxb3kwa3ZvZnV3In0.SjO2xA7VagXu-2gIIjVkBw',
    width: 800,
    height: 600,
    style: { margin: '16px' },
    optionsMenu: (
      <ActionButton>
        <Text>Hide Layers</Text>
      </ActionButton>
    ),
    legends: <Legend items={legendItems} />,
    hoverPopupContent: SimpleLabelPopupContent,
    clickPopupContent: DetailedLabelPopupContent,
    clickPopupContentProps: {
      getIcon: ({ primaryFeatureProps }) =>
        primaryFeatureProps &&
        primaryFeatureProps.category === 'transportation' ? (
            <Train size="L" />
          ) : (
            <Shop size="L" />
          ),
    },
    interactiveLayerIds: ['asset-points'],
  };

  React.useEffect(() => {
    fetchCartoVectorSource(
      'assets',
      sourceSQL,
      // eslint-disable-next-line no-console
    ).then(
      s => setSource(s as SourceProps),
      // eslint-disable-next-line no-console
      err => console.error('CARTO', err),
    );
  }, []);
  return (
    <Map {...defaultProps}>
      {source && (
        <Source {...source}>
          <Layer {...layer} />
        </Source>
      )}
    </Map>
  );
};
