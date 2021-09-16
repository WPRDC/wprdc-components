import { ProfilesAPI } from './api';
import { useEffect, useState } from 'react';
import {
  DataVizBase,
  DataVizID,
  Downloaded,
  Geog,
  GeogIdentifier,
  GeographyType,
} from '../../types';
import { ResponsePackage } from '../api';

export function useDataViz(
  dataVizID?: DataVizID,
  geogIdentifier?: GeogIdentifier
) {
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

    if (!!dataVizID?.id && !!geogIdentifier?.geogID) {
      setIsLoading(true);
      ProfilesAPI.requestDataViz(dataVizID, geogIdentifier).then(
        handleResponse
      );
    }

    return function cleanup() {};
  }, [dataVizID, geogIdentifier]);

  return { dataViz, error, isLoading };
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
