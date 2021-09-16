// noinspection SqlResolve

import * as React from 'react';
import { useState } from 'react';
import '../src/styles/global.css';

import { MapEvent } from 'react-map-gl';

import {
  ConnectedDataViz,
  ConnectedGeographySection,
  DataVizID,
  DataVizType,
  DataVizVariant,
  Divider,
  GeogIdentifier,
  GeographyType,
  GeogTypeDescriptor,
  LayerPanelVariant,
  Map,
  MapEventExtras,
} from '../src';
import { Meta } from '@storybook/react';

export default {
  title: 'Example',
  component: Map,
  subcomponents: { ConnectedGeographySection, ConnectedDataViz },
} as Meta;

export const BECExample = () => {
  const [geog, setGeog] = useState<GeogIdentifier>();

  const handleClick: (evt: MapEvent, extras?: MapEventExtras) => void = (
    _,
    extras
  ) => {
    if (!!extras) setGeog(extras.menuGeog);
  };

  return (
    <div className="flex layerItems-stretch h-96">
      <div className="flex-grow  flex-shrink border-r border-black">
        <Map
          mapboxApiAccessToken="pk.eyJ1Ijoic3RldmVuZHNheWxvciIsImEiOiJja295ZmxndGEwbGxvMm5xdTc3M2MwZ2xkIn0.WDBLMZYfh-ZGFjmwO82xvw"
          layerPanelVariant={LayerPanelVariant.Left}
          assetTypes={assetTypes}
          profilesLayers={profilesLayers}
          menuGeogTypes={menuLayers}
          onClick={handleClick}
        />
      </div>
      <div className="w-96 p-2 flex-column">
        <div className="min-h-0 max-h-24">
          <ConnectedGeographySection {...geog} />
          <Divider weight="thick" />
        </div>
        <div className="overflow">
          {!!geog && (
            <ConnectedDataViz
              variant={DataVizVariant.Blurb}
              geogIdentifier={geog}
              dataVizID={bigValViz}
            />
          )}
          {!!geog && (
            <ConnectedDataViz
              variant={DataVizVariant.Details}
              geogIdentifier={geog}
              dataVizID={chartViz}
            />
          )}
        </div>
      </div>
    </div>
  );
};

const bigValViz = {
  id: 39,
  name: 'Median Age',
  slug: 'median-age',
  vizType: DataVizType.BigValue,
  description: '',
  staticOptions: {},
};

// const tableViz = {
//   id: 16,
//   name: 'Population by Race',
//   slug: 'pop-by-race',
//   vizType: DataVizType.Table,
//   description: '',
//   staticOptions: {},
// };

const chartViz = {
  id: 68,
  name: 'Population by Race',
  slug: 'pop-race-bar-chart',
  vizType: DataVizType.Chart,
  description: '',
  staticOptions: {
    acrossGeogs: false,
  },
};

const menuLayers: GeogTypeDescriptor[] = [
  {
    id: GeographyType.BlockGroup,
    name: 'Block Group',
    tableName: 'census_blockgroup',
    cartoSql:
      "SELECT *, name as map_name, 'blockGroup' as geogType, geoid as geogID FROM census_blockgroup  WHERE statefp = '42' AND countyfp IN ('003','019','128','007','005','063','129','051','059','125','073')",
    description: 'Smallest geographical unit w/ ACS sample data.',
  },
  {
    id: GeographyType.Tract,
    name: 'Tract',
    tableName: 'census_tract',
    cartoSql:
      "SELECT *, name as map_name, 'tract' as geogType, geoid as geogID FROM census_tract  WHERE statefp = '42' AND countyfp IN ('003','019','128','007','005','063','129','051','059','125','073')",
    description: 'Drawn to encompass ~2500-8000 people',
  },
];

const assetTypes = [
  {
    name: 'nursing_homes',
    title: 'Nursing Homes',
  },
  {
    name: 'veterans_social_orgs',
    title: "Veteran's Social Orgs",
  },
  {
    name: 'va_facilities',
    title: 'VA Facilities',
  },
  {
    name: 'public_buildings',
    title: 'Public Buildings',
  },
  {
    name: 'schools',
    title: 'Schools',
  },
  {
    name: 'health_centers',
    title: 'Health Centers',
  },
  {
    name: 'rec_centers',
    title: 'Rec Centers',
  },
  {
    name: 'museums',
    title: 'Museums',
  },
];

const profilesLayers: DataVizID[] = [
  {
    id: 58,
    name: 'Population Under 18',
    slug: 'pop-under18-map',
    vizType: DataVizType.MiniMap,
    description: 'Count and percentage of population ages 0 - 17',
  },
];
