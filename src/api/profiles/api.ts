/**
 *
 * Profiles API
 *
 * Settings and functions that handle communicating with profiles backend.
 *
 */
import { createAPI, Method, ResponsePackage } from '../api';
import {
  DataVizBase,
  Downloaded,
  Geog,
  GeogBrief,
  GeogIdentifier,
  GeogLevel,
  GeographyType,
  Indicator,
  Taxonomy,
} from '../../types';

const HOST = 'https://api.profiles.wprdc.org';

enum Endpoint {
  Domain = 'domain',
  // Subdomain = 'subdomain', // might not be necessary to use here
  Indicator = 'indicator', //   or here
  DataViz = 'data-viz',
  Geog = 'geo',
  GeogTypes = 'geo/geog-types',
}

const api = createAPI<Endpoint>(HOST);

function requestTaxonomy() {
  return api.callAndProcessEndpoint<{ results: Taxonomy }>(
    Endpoint.Domain,
    Method.GET
  );
}

function requestIndicator(slug: string) {
  return api.callAndProcessEndpoint<Indicator>(Endpoint.Indicator, Method.GET, {
    id: slug,
  });
}

function requestGeoLayers() {
  return api.callAndProcessEndpoint<GeogLevel[]>(
    Endpoint.GeogTypes,
    Method.GET
  );
}

function requestDataViz<T extends Downloaded<DataVizBase>>(
  dataVizSlug: string,
  geog: GeogBrief
): Promise<ResponsePackage<T>> {
  const { geogType, geogID } = geog;
  return api.callAndProcessEndpoint<T>(Endpoint.DataViz, Method.GET, {
    id: dataVizSlug,
    params: { geogType: geogType, geogID: geogID },
  });
}

function requestGeogDetails(
  geog: GeogIdentifier
): Promise<ResponsePackage<Geog>> {
  const { geogType, geogID } = geog;
  return api.callAndProcessEndpoint<Geog>(Endpoint.Geog, Method.GET, {
    id: `${geogType}/${geogID}`,
    params: { details: true },
  });
}

function requestGeogList(geogType: GeographyType) {
  return api.callAndProcessEndpoint<GeogBrief[]>(Endpoint.Geog, Method.GET, {
    id: geogType,
  });
}

export const ProfilesAPI = {
  requestTaxonomy,
  requestGeoLayers,
  requestDataViz,
  requestGeogDetails,
  requestGeogList,
  requestIndicator,
};
