import * as React from 'react';
import { SearchBoxConnection } from './types';
import { AssetBrief, AssetType } from '../../types/communityAssets';
import {
  DataVizID,
  GeogIdentifier,
  GeographyType,
  GeogTypeDescriptor,
  Indicator,
  VariableBase,
} from '../../types';
import { Item } from '@react-stately/collections';
import { Described } from '../../types/profiles/common';
import ConnectedSearchBox, {
  PremadeConnectedSearchBoxProps,
} from './ConnectedSearchBox';
import { AsyncListLoadOptions } from '@react-stately/data';

const LIMIT = 100;

export type ConnectionKey = string | number | object;

export const assetsConnection: SearchBoxConnection<AssetBrief> = {
  async load({ signal, cursor, filterText }) {
    const res = await fetch(
      cursor ||
        `https://assets.wprdc.org/api/dev/assets/assets/?limit=${LIMIT}&search=${filterText}`,
      { signal }
    );
    const json = await res.json();

    return {
      items: json.results,
      cursor: json.next,
    };
  },
  renderItem: (item) => <Item key={item.id}>{item.name}</Item>,
  getKey: (item) => item.id.toString(),
};

export const assetTypeConnection: SearchBoxConnection<AssetType> = {
  async load({ signal }) {
    const res = await fetch(
      `https://assets.wprdc.org/api/dev/assets/asset-types`,
      { signal }
    );
    const json = await res.json();
    return {
      items: json,
      cursor: undefined,
    };
  },
  renderItem: (item) => <Item key={item.name}>{item.title}</Item>,
  getKey: (item) => item.name,
};

export class GeographyConnection
  implements SearchBoxConnection<GeogIdentifier>
{
  geogType: GeographyType;

  constructor(geogType: GeographyType) {
    this.geogType = geogType;
  }

  public load = async ({
    signal,
    cursor,
    filterText,
  }: AsyncListLoadOptions<GeogIdentifier, string>) => {
    const res = await fetch(
      cursor ||
        `https://api.profiles.wprdc.org/geo/${this.geogType}/?search=${filterText}`,
      { signal }
    );
    const json = await res.json();
    return {
      items: json.results,
      cursor: json.next,
    };
  };

  public renderItem = (item: GeogIdentifier) => (
    <Item key={item.id}>{item.title}</Item>
  );
  public getKey = (item: GeogIdentifier) => item.id.toString();
}

// export const geographyConnection: SearchBoxConnection<GeogIdentifier> = {
//   async load({ signal, cursor, filterText }) {
//     const res = await fetch(
//       cursor ||
//         `https://api.profiles.wprdc.org/geo/neighborhood/?search=${filterText}`,
//       { signal }
//     );
//     const json = await res.json();
//     return {
//       items: json.results,
//       cursor: json.next,
//     };
//   },
//   renderItem: (item) => <Item key={item.id}>{item.title}</Item>,
//   getKey: (item) => item.id.toString(),
// };

export const geographyTypeConnection: SearchBoxConnection<GeogTypeDescriptor> =
  {
    async load({ signal }) {
      const res = await fetch(`https://api.profiles.wprdc.org/geo/geog-types`, {
        signal,
      });
      const json = await res.json();

      return {
        items: json,
        cursor: undefined,
      };
    },
    renderItem: (item) => <Item key={item.id}>{item.name}</Item>,
    getKey: (item) => item.id.toString(),
  };

function makeProfilesConnection<T extends Described>(
  itemType: string
): SearchBoxConnection<T> {
  return {
    async load({ signal, cursor, filterText }) {
      const res = await fetch(
        cursor ||
          `https://api.profiles.wprdc.org/${itemType}/?search=${filterText}`,
        { signal }
      );
      const json = await res.json();

      return {
        items: json.results,
        cursor: json.next,
      };
    },
    renderItem: (item) => <Item key={item.id}>{item.name}</Item>,
    getKey: (item) => item.id.toString(),
  };
}

export const dataVizConnection: SearchBoxConnection<DataVizID> =
  makeProfilesConnection<DataVizID>('data-viz');
export const variableConnection: SearchBoxConnection<VariableBase> =
  makeProfilesConnection<VariableBase>('variable');
export const indicatorConnection: SearchBoxConnection<Indicator> =
  makeProfilesConnection<Indicator>('indicator');

export function withConnection<T extends object>(
  connection: SearchBoxConnection<T>
) {
  return (props: PremadeConnectedSearchBoxProps<T>) => (
    <ConnectedSearchBox<T> {...props} connection={connection} />
  );
}

export const AssetSearchBox = withConnection<AssetBrief>(assetsConnection);

export const GeogTypeSearchBox = withConnection<GeogTypeDescriptor>(
  geographyTypeConnection
);

export const makeGeogSearchBox = (geogType: GeographyType) =>
  withConnection<GeogIdentifier>(new GeographyConnection(geogType));

// const GeogSearchBox = withConnection<GeogIdentifier>(geographyConnection);

export const DataVizSearchBox = withConnection<DataVizID>(dataVizConnection);
