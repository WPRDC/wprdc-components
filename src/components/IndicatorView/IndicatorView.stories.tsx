import React, { useEffect } from 'react';
import {
  ConnectedIndicatorView,
  ConnectedIndicatorViewProps,
  IndicatorView,
  IndicatorViewProps,
} from './';
import { Story } from '@storybook/react';

import {
  DataVizType,
  GeographyType,
  Indicator as IndicatorType,
} from '../../types';
import { useProvider } from '../Provider';

export default {
  title: 'Indicator View',
  component: IndicatorView,
};

const DEFAULT_GEOG = {
  id: 104,
  geogType: GeographyType.County,
  geogID: '42003',
};

const DEFAULT_INDICATOR: IndicatorType = {
  id: 20,
  name: 'Population Under 18',
  slug: 'population-under-18',
  description: 'Count and percentage of population ages 0 - 17',
  longDescription:
    'This measurement indicates the total youth population of an area.',
  limitations: '',
  importance: '',
  source: '',
  provenance: '',
  dataVizes: [
    {
      id: 58,
      name: 'Population Under 18',
      slug: 'pop-under18-map',
      vizType: DataVizType.MiniMap,
    },
  ],
  hierarchies: [
    {
      domain: {
        id: 1,
        slug: 'dev',
        name: 'Development',
      },
      subdomain: {
        id: 10,
        slug: 'dev',
        name: 'Development',
      },
    },
    {
      domain: {
        id: 2,
        slug: 'demographics',
        name: 'Demographics',
      },
      subdomain: {
        id: 11,
        slug: 'population',
        name: 'Population',
      },
    },
    {
      domain: {
        id: 2,
        slug: 'demographics',
        name: 'Demographics',
      },
      subdomain: {
        id: 8,
        slug: 'age',
        name: 'Age',
      },
    },
  ],
};

const OTHER_INDICATOR: IndicatorType = {
  id: 17,
  name: 'Population by Race',
  slug: 'pop-by-race',
  description: 'Population count and percent by race.',
  longDescription:
    'The U.S. Census Bureau collects race data in accordance with guidelines provided by the U.S. Office of Management and Budget (OMB), and these data are based on self- identification.',
  limitations: '',
  importance: '',
  source:
    'United States Census Bureau, American Community Survey 5 Year Estimates',
  provenance: '',
  dataVizes: [
    {
      id: 16,
      name: 'Population by Race',
      slug: 'pop-by-race',
      vizType: DataVizType.Table,
    },
    {
      id: 47,
      name: 'Global majority population',
      slug: 'Global-maj-pop',
      vizType: DataVizType.BigValue,
    },
    {
      id: 68,
      name: 'Population by Race',
      slug: 'pop-race-bar-chart',
      vizType: DataVizType.Chart,
    },
  ],
  hierarchies: [
    {
      domain: {
        id: 2,
        slug: 'demographics',
        name: 'Demographics',
      },
      subdomain: {
        id: 4,
        slug: 'race-and-ethnicity',
        name: 'Race and Ethnicity',
      },
    },
  ],
};

const Template: Story<IndicatorViewProps> = (args) => {
  const context = useProvider();
  useEffect(() => context.fetchAndSetGeog(DEFAULT_GEOG), []);

  return (
    <>
      <IndicatorView {...args} />
    </>
  );
};

const ConnectedTemplate: Story<ConnectedIndicatorViewProps> = (args) => {
  const context = useProvider();
  useEffect(() => context.fetchAndSetGeog(DEFAULT_GEOG), []);

  return (
    <>
      <ConnectedIndicatorView {...args} />
    </>
  );
};

export const Connected = ConnectedTemplate.bind({});
Connected.args = {
  indicatorSlug: 'pop-by-race',
};

export const Details = Template.bind({});
Details.args = {
  indicator: OTHER_INDICATOR,
  card: false,
};

export const Card = Template.bind({});
Card.args = {
  indicator: DEFAULT_INDICATOR,
  card: true,
};
