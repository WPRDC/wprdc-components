/**
 *
 * DataViz
 *
 */
import React from 'react';
import '../../styles/global.css';

import { getSpecificDataViz, getVariantComponent } from './util';
import {
  ColorScheme,
  DataVizBase,
  DataVizData,
  Downloaded,
  GeogBrief,
  VizProps,
} from '../../types';

import { DataVizVariant } from './types';
import { DEFAULT_COLOR_SCHEME } from '../../util';

interface Props {
  dataViz?: Downloaded<DataVizBase>;
  geog?: GeogBrief;
  variant: DataVizVariant;
  isLoading?: boolean;
  error?: string;
  colorScheme?: ColorScheme;
  onExplore?: (dataViz: DataVizBase) => unknown;
  showGeog?: boolean;
}

export function DataViz(props: Props) {
  const {
    dataViz,
    geog,
    showGeog,
    colorScheme,
    isLoading,
    error,
    variant = DataVizVariant.Default,
    onExplore,
  } = props;

  function handleExplore() {
    if (!!onExplore && !!dataViz) onExplore(dataViz);
  }

  // get correct component for the viz
  const CurrentViz: React.FC<VizProps<DataVizBase, DataVizData>> | undefined =
    getSpecificDataViz(dataViz, error);

  // variant controls the contents and style of component around the actual dataviz
  const WrapperComponent = getVariantComponent(variant);

  return (
    <>
      <WrapperComponent
        dataViz={dataViz}
        geog={geog}
        showGeog={showGeog}
        CurrentViz={CurrentViz}
        colorScheme={colorScheme || DEFAULT_COLOR_SCHEME}
        isLoading={!!isLoading}
        onExplore={handleExplore}
        error={error}
      />
    </>
  );
}

export default DataViz;
