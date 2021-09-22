import { ProfilesAPI } from './api';
import { useEffect, useState } from 'react';
import {
  DataVizBase,
  Downloaded,
  Geog,
  GeogBrief,
  GeographyType,
  Indicator,
} from '../../types';
import { ResponsePackage } from '../api';

export function useDataViz(dataVizSlug?: string, geog?: GeogBrief) {
  const [dataViz, setDataViz] = useState<Downloaded<DataVizBase>>();
  const [isLoading, setIsLoading] = useState<boolean>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    function handleResponse({
      data,
      error,
    }: ResponsePackage<Downloaded<DataVizBase>>) {
      setDataViz(data);
      setError(error);
      setIsLoading(false);
    }

    if (!!dataVizSlug && !!geog?.geogID) {
      setIsLoading(true);
      ProfilesAPI.requestDataViz(dataVizSlug, geog).then(handleResponse);
    }

    return function cleanup() {};
  }, [dataVizSlug, geog]);

  return { dataViz, error, isLoading };
}

export function useIndicator(indicatorSlug?: string) {
  const [indicator, setIndicator] = useState<Indicator>();
  const [isLoading, setIsLoading] = useState<boolean>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    function handleResponse({ data, error }: ResponsePackage<Indicator>) {
      setIndicator(data);
      setError(error);
      setIsLoading(false);
    }

    if (!!indicatorSlug) {
      setIsLoading(true);
      ProfilesAPI.requestIndicator(indicatorSlug).then(handleResponse);
    }

    return function cleanup() {};
  }, [indicatorSlug]);

  return { indicator, isLoading, error };
}

export function useGeography(geogType?: GeographyType, geogID?: string) {
  const [geog, setGeog] = useState<Geog>();
  const [isLoading, setIsLoading] = useState<boolean>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    function handleResponse({ data, error }: ResponsePackage<Geog>) {
      setGeog(data);
      setError(error);
      setIsLoading(false);
    }

    if (!!geogType && geogID) {
      setIsLoading(true);
      ProfilesAPI.requestGeogDetails({ geogID, geogType }).then(handleResponse);
    }

    return function cleanup() {};
  }, [geogID, geogType]);

  return { geog, isLoading, error };
}
