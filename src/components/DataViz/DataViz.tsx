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
  GeogIdentifier,
  VizProps,
} from '../../types';

import { DataVizVariant } from './types';
import { DEFAULT_COLOR_SCHEME } from '../../util';

interface Props {
  dataViz?: Downloaded<DataVizBase>;
  geogIdentifier?: GeogIdentifier;
  variant: DataVizVariant;
  isLoading?: boolean;
  error?: string;
  colorScheme?: ColorScheme;
  onExplore?: (dataViz: DataVizBase) => unknown;
}

export function DataViz(props: Props) {
  const {
    dataViz,
    geogIdentifier,
    colorScheme,
    isLoading,
    error,
    variant = DataVizVariant.Default,
    onExplore,
  } = props;
  // const [_, setOpenDialog] = React.useState<AvailableDialogs | null>(null);

  // extra actions menu
  // const menuItems: MenuItem[] = [
  //   {
  //     key: VizMenuItem.Share,
  //     label: 'Share...',
  //     icon: <ShareIcon className="h-4" />,
  //   },
  //   {
  //     key: VizMenuItem.Report,
  //     label: 'Questions/Concerns...',
  //     icon: <ReportIcon className="h-4" />,
  //   },
  //   {
  //     key: VizMenuItem.API,
  //     label: 'API Endpoint',
  //     icon: <APIIcon className="h-4" />,
  //   },
  // ];

  // function handleMenuSelection(key: React.Key): void {
  //   switch (key as VizMenuItem) {
  //     case VizMenuItem.DownloadData:
  //       // todo: setup download
  //       break;
  //     case VizMenuItem.DownloadSVG:
  //       // todo: use vega svg download
  //       break;
  //     case VizMenuItem.Share:
  //       setOpenDialog(AvailableDialogs.Share);
  //       break;
  //     case VizMenuItem.Report:
  //       setOpenDialog(AvailableDialogs.Report);
  //       break;
  //     case VizMenuItem.API:
  //       setOpenDialog(AvailableDialogs.API);
  //   }
  // }

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
        geogIdentifier={geogIdentifier}
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
