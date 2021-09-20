import * as React from 'react';
import { DataViz } from './DataViz';
import { ConnectedDataVizProps } from './types';
import ErrorMessage from '../ErrorMessage';
import { useDataViz } from '../../api/profiles';
import { useProvider } from '../Provider';

export const ConnectedDataViz: React.FC<ConnectedDataVizProps> = ({
  dataVizSlug,
  geogIdentifier,
  variant,
  onExplore,
}) => {
  const { geog } = useProvider();
  const geogID = React.useMemo(
    () => geogIdentifier || geog,
    [geog, geogIdentifier]
  );
  const { dataViz, isLoading, error } = useDataViz(dataVizSlug, geogID);

  console.log({ error });

  if (!!error) {
    return <ErrorMessage title={`$Not Found`} message={error} />;
  }
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
};
