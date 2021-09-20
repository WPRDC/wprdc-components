import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import { ConnectedDataViz, ConnectedDataVizProps, DataVizVariant } from '.';
import {
  DataVizID,
  DataVizType,
  GeogIdentifier,
  GeographyType,
} from '../../types';
import { Skeleton } from './DataVizCard/Skeleton';

export default {
  title: 'Data Viz',
  component: ConnectedDataViz,
} as Meta;

const bigValue: DataVizID = {
  id: 38,
  name: 'Total Population',
  slug: 'total-population-bv',
  vizType: DataVizType.BigValue,
};

const miniMap: DataVizID = {
  id: 58,
  name: 'Population Under 18',
  slug: 'pop-under18-map',
  vizType: DataVizType.MiniMap,
  description: 'Count and percentage of population ages 0 - 17',
};

const table: DataVizID = {
  id: 16,
  name: 'Population by Race',
  slug: 'pop-by-race',
  vizType: DataVizType.Table,
  description: '',
};

// const barChart: DataVizID = {
//   id: 68,
//   name: 'Population by Race',
//   slug: 'pop-race-bar-chart',
//   vizType: DataVizType.Chart,
//   description: '',
// };

const geog: GeogIdentifier = {
  id: 0,
  geogType: GeographyType.County,
  geogID: '42003',
};

const Template: Story<ConnectedDataVizProps> = (args) => (
  <ConnectedDataViz {...args} />
);

export const CardSkeleton = () => <Skeleton />;

export const Card = Template.bind({});

export const Preview = Template.bind({});

export const Blurb = Template.bind({});

export const Details = Template.bind({});

Card.args = {
  dataVizID: miniMap,
  geogIdentifier: geog,
  variant: DataVizVariant.Default,
};

Preview.args = {
  dataVizID: table,
  geogIdentifier: geog,
  variant: DataVizVariant.Preview,
};

Blurb.args = {
  dataVizID: bigValue,
  geogIdentifier: geog,
  variant: DataVizVariant.Blurb,
};

Details.args = {
  dataVizID: miniMap,
  geogIdentifier: geog,
  variant: DataVizVariant.Details,
};
