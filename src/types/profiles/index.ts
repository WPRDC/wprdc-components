import { Described } from './common';
import { DataVizID } from './viz';

export * from './time';
export * from './variable';
export * from './viz';
export * from './source';
export * from './geog';

interface IndicatorHierarchy {
  domain: Described;
  subdomain: Described;
}

export interface Indicator extends Described {
  longDescription: string;
  limitations: string;
  importance: string;
  source: string;
  provenance: string;
  dataVizes: DataVizID[];
  hierarchies: IndicatorHierarchy[];
}

export interface Subdomain extends Described {
  indicators: Indicator[];
}

export interface Domain extends Described {
  subdomains: Subdomain[];
}

export type Taxonomy = Domain[];

type URLNavParamKeys =
  | 'geogType'
  | 'geogID'
  | 'domainSlug'
  | 'subdomainSlug'
  | 'indicatorSlug'
  | 'dataVizSlug';

export type URLNavParams = Record<URLNavParamKeys, string>;

export enum ColorScheme {
  Light = 'light',
  Dark = 'dark',
}

export interface ProfilesMapProperties extends Described {}
