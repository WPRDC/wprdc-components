import * as React from 'react';
import AssetDetails from './AssetDetails';
import { ConnectedAssetDetailsProps } from './types';
import { useAssetDetails } from '../../api';
import ErrorMessage from '../ErrorMessage';
import { LoadingMessage } from '../LoadingMessage';

export const ConnectedAssetDetails: React.FC<ConnectedAssetDetailsProps> = ({
  id,
  name,
  ...styleProps
}) => {
  const { details, error } = useAssetDetails(id);
  if (!!details) {
    return <AssetDetails asset={details} {...styleProps} />;
  } else {
    if (error)
      return (
        <ErrorMessage
          title={`${name || 'Asset'} Not Found`}
          message={'Contact the help desk.'}
        />
      );
    return <LoadingMessage name={name} />;
  }
};
