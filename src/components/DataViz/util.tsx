import React from 'react';
import {
  ChartViz,
  DataVizBase,
  DataVizID,
  DataVizType,
  Downloaded,
  GeogBrief,
  RowRecord,
  TableViz,
  TabularData,
  Variable,
  VizProps,
} from '../../types';
import { DataVizVariant } from './types';

import { saveAs } from 'file-saver';
import { Chart } from '../../data-presentations/Chart';
import { Table } from '../../data-presentations/Table';
import { Sentence } from '../../data-presentations/Sentence';
import BigValue from '../../data-presentations/BigValue';

import { DataVizMini } from './DataVizMini';
import { DataVizPreview } from './DataVizPreview';
import { DataVizDetails } from './DataVizDetails';
import { DataVizCard } from './DataVizCard';

import { MissingVizMessage } from '../MissingVizMessage';
import { MiniMap } from '../../data-presentations';

// import { SourceProps } from 'react-map-gl';

export function getSpecificDataViz(
  dataViz?: Downloaded<DataVizBase>,
  error?: string
) {
  if (!!error) return MissingVizMessage;
  if (!dataViz) return undefined;

  const componentMap: Record<DataVizType, React.FC<VizProps<any, any, any>>> = {
    [DataVizType.Chart]: Chart,
    [DataVizType.BigValue]: BigValue,
    [DataVizType.MiniMap]: MiniMap,
    [DataVizType.Table]: Table,
    [DataVizType.Sentence]: Sentence,
  };
  return componentMap[dataViz.vizType];
}

export function makeKey(dataVizID: DataVizID, geog: GeogBrief) {
  return `${dataVizID.slug}@${geog.geogType}/${geog.geogID}`;
}

/**
 * Formats `value` for `variable` per styling data extracted from `variable`.
 * @param {Variable} variable
 * @param {number} value
 */
export function formatValue(
  variable: Variable,
  value?: string | number | Date
): React.ReactNode {
  switch (typeof value) {
    case 'string':
      return value;
    case 'number':
    case 'object':
      return value.toLocaleString(
        undefined,
        variable.localeOptions || undefined
      );
    default:
      return 'N/A';
  }
}

/**
 * Returns the DataViz component based on the supplied variant.
 *
 * @param {DataVizVariant} variant
 */
export function getVariantComponent(variant: DataVizVariant) {
  switch (variant) {
    case DataVizVariant.Blurb:
      return DataVizMini;
    case DataVizVariant.Preview:
      return DataVizPreview;
    case DataVizVariant.Details:
      return DataVizDetails;
    case DataVizVariant.Card:
    case DataVizVariant.Default:
    default:
      return DataVizCard;
  }
}

export function downloadCSV(dataViz: Downloaded<DataVizBase>) {
  switch (dataViz.vizType) {
    case DataVizType.Table:
      return downloadTable(dataViz as Downloaded<TableViz, TabularData>);
    case DataVizType.Chart:
      return downloadChart(dataViz as Downloaded<ChartViz, TabularData>);
    // case DataVizType.MiniMap:
    //   return downloadMiniMap(dataViz as Downloaded<MiniMapViz, MiniMapOptions>);
  }
}

export function downloadTable(table: Downloaded<TableViz, TabularData>): void {
  const blob = new Blob([dumpCSV(table.data)]);
  const fileName = `${table.slug}-${table.geog.title.replace(
    RegExp('s+'),
    '-'
  )}`;
  saveAs(blob, fileName);
}

export function downloadChart(chart: Downloaded<ChartViz, TabularData>): void {
  const blob = new Blob([dumpCSV(chart.data)], {
    type: 'text/csv;charset=utf-8',
  });
  const fileName = `${chart.slug}-${chart.geog.title}.csv`;
  saveAs(blob, fileName);
}

//
// export function downloadMiniMap(
//   map: Downloaded<MiniMapViz, MiniMapOptions>
// ): void {
//   const urls: string[] = map.data.sources
//     .filter((s: SourceProps) => typeof s.data === 'string')
//     .map((s: SourceProps) => s.data as string);
//   const fileName = `${map.slug}.geojson?format=json`;
//   const url = urls[0] + '?download=true';
//   saveAs(url, fileName);
// }

export function dumpCSV(data: RowRecord[]): string {
  return data.reduce((csv, row, i) => {
    if (i === 0) {
      return `${_csvHeader(row)}\n${_csvRow(row)}`;
    }
    return `${csv}\n${_csvRow(row)}`;
  }, '');
}

function _csvHeader(row: RowRecord): string {
  return Object.keys(row)
    .map((k) => `"${k}"`)
    .join(',');
}

function _csvRow(row: RowRecord): string {
  return Object.values(row)
    .map((v) => (typeof v === 'string' ? `"${v}` : v))
    .join(',');
}
