/**
 * Formats a percent value to site standards
 * @param {number} value
 */
import * as React from 'react';
import { GeogBrief, GeographyType, Variable } from '../types';

export function formatPercent(value?: number): React.ReactNode {
  if (typeof value === 'number')
    return value.toLocaleString(undefined, {
      style: 'percent',
      minimumSignificantDigits: 1,
      maximumSignificantDigits: 3,
    });
  return 'N/A';
}

/**
 * Extracts title  from `Variable` and formats it.
 * @param {Variable} variable
 */
export function formatCategory(variable: Variable): React.ReactNode {
  const dashes = Array(variable.depth).join('-');
  let category;
  if (!!variable.shortName)
    category = <abbr title={variable.name}>{variable.shortName}</abbr>;
  else category = variable.name;
  return (
    <p>
      {!!dashes && `${dashes} `}
      {category}
    </p>
  );
}

/**
 * Returns string containing the common name of a location.
 * @param geog
 */
export function getGeogIDTitle(geog: GeogBrief): string {
  switch (geog.geogType) {
    case GeographyType.County:
      return `${geog.name} County`;
    case GeographyType.Tract:
      return `Tract ${geog.geogID}`;
    case GeographyType.BlockGroup:
      return `Block Group ${geog.geogID}`;
    default:
      return geog.name || '';
  }
}

/**
 * Convert an object of paramaters ({param1: value1, etc...}) for a request to
 * a query string ("?param1=value1&p2=v2...")
 *
 * @param {Object} params - object of key value pairs of parameters
 * @returns {string} - url query string representation of `params`
 */
export function serializeParams(params?: object) {
  if (!params || !Object.keys(params)) return '';
  return `?${Object.entries(params)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join('&')}`;
}
