import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import { ConnectedDataViz, ConnectedDataVizProps, DataVizVariant } from '.';
import { DataVizID, DataVizType, GeogBrief, GeographyType } from '../../types';
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

const geog: GeogBrief = {
  id: 0,
  name: 'Allegheny',
  title: 'Allegheny',
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
  dataVizSlug: miniMap.slug,
  geog: geog,
  showGeog: true,
  variant: DataVizVariant.Default,
};

Preview.args = {
  dataVizSlug: table.slug,
  geog: geog,
  variant: DataVizVariant.Preview,
};

Blurb.args = {
  dataVizSlug: bigValue.slug,
  geog: geog,
  variant: DataVizVariant.Blurb,
};

Details.args = {
  dataVizSlug: miniMap.slug,
  geog: geog,
  variant: DataVizVariant.Details,
};
