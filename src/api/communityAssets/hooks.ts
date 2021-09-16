import { AssetsAPI } from './api';
import { Asset } from '../../types/communityAssets/';
import { useEffect, useState } from 'react';
import { ResponsePackage } from '../api';

export function useAssetDetails(assetID: number) {
  const [details, setDetails] = useState<Asset>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    function handleResponse({ data, error }: ResponsePackage<Asset>) {
      setDetails(data);
      setError(error);
    }

    AssetsAPI.getAssetById(assetID).then(handleResponse);
    return function cleanup() {};
  }, [assetID]);

  return { details, error };
}
