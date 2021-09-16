import {
  DataVizBase,
  DataVizData,
  DataVizID,
  Downloaded,
  GeogIdentifier,
  VizMenuItem,
  VizWrapperProps,
} from '../../types';
import React from 'react';

export interface DataVizState {
  dataVizDataCache: DataVizDataCache;
  // dataVizMetadataCache: Record<string, DataVisualization>;
}

/** Data and state of its collection for some dataviz at some geog*/
export interface DataVizDataRecord<
  T extends DataVizBase = DataVizBase,
  D extends DataVizData = DataVizData
> {
  dataViz: Downloaded<T, D>;
  isLoading: boolean;
  error?: string;
}

export type DataVizDataCache = Record<string, DataVizDataRecord>;

export interface DataVizRequest {
  dataVizID: DataVizID;
  geogIdentifier: GeogIdentifier;
}

export type ContainerState = DataVizState;

export enum DataVizVariant {
  Default,
  Preview,
  Blurb,
  Details,
  Card,
}

export interface MenuItem {
  key: VizMenuItem;
  label: React.ReactNode;
  icon?: React.ReactNode;
}

export enum AvailableDialogs {
  Report,
  Share,
  API,
}

export interface DataVizDetailsProps extends VizWrapperProps {
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
}

export interface DataVizMiniProps extends VizWrapperProps {}

export interface DataVizPreviewProps extends VizWrapperProps {}

export interface DataVizCardProps extends VizWrapperProps {}

export interface DataVizStyleProps {}

export interface ConnectedDataVizProps {
  dataVizID?: DataVizID;
  geogIdentifier?: GeogIdentifier;
  variant: DataVizVariant;
  onExplore?: (dataViz: DataVizBase) => unknown;
}
