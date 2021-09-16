import * as React from 'react';
import '../../styles/global.css';

import ErrorMessage from '../ErrorMessage';
import { LoadingMessage } from '../LoadingMessage';
import { ConnectedGeographySectionProps } from './types.js';
import { useGeography } from '../../api/profiles';
import { GeographySection } from './GeographySection';

export const ConnectedGeographySection: React.FC<ConnectedGeographySectionProps> =
  ({ geogType, geogID, ...otherProps }) => {
    const { geog, isLoading, error } = useGeography(geogType, geogID);

    if (!!error) {
      return (
        <div className="h-max">
          <ErrorMessage
            variant="centered"
            title={`${geogID} Not Found`}
            message={error}
          />
        </div>
      );
    }
    if (!!isLoading) {
      return <LoadingMessage name={geogID} />;
    }
    if (!!geog) {
      return (
        <GeographySection
          geog={geog}
          geogIsLoading={isLoading}
          {...otherProps}
        />
      );
    } else {
      if (error)
        return (
          <ErrorMessage
            variant="centered"
            title={`${geogID} Not Found`}
            message={'Contact the help desk.'}
          />
        );
      return <LoadingMessage name={geogID} />;
    }
  };
