import * as React from 'react';
import { DataViz } from './DataViz';
import { ConnectedDataVizProps } from './types';
import ErrorMessage from '../ErrorMessage';
import { LoadingMessage } from '../LoadingMessage';
import { useDataViz } from '../../api/profiles';
import { useProvider } from '../Provider';

export const ConnectedDataViz: React.FC<ConnectedDataVizProps> = ({
  dataVizID,
  geogIdentifier,
  variant,
  onExplore,
}) => {
  const { name } = dataVizID || {};
  const { geog } = useProvider();
  const geogID = React.useMemo(
    () => geogIdentifier || geog,
    [geog, geogIdentifier]
  );
  const { dataViz, isLoading, error } = useDataViz(dataVizID, geogID);

  if (!!error) {
    return <ErrorMessage title={`${name} Not Found`} message={error} />;
  }
  if (isLoading) {
    return <LoadingMessage name={name} />;
  }
  if (!!dataViz && !!dataVizID) {
    return (
      <DataViz
        dataViz={dataViz}
        geogIdentifier={geogID}
        isLoading={isLoading}
        error={error}
        variant={variant}
        onExplore={onExplore}
      />
    );
  }
  return (
    <ErrorMessage title={`Unknown Error`} message={'Please let us know.'} />
  );
};
