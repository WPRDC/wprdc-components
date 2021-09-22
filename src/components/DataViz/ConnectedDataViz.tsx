import * as React from 'react';
import { DataViz } from './DataViz';
import { ConnectedDataVizProps } from './types';
import ErrorMessage from '../ErrorMessage';
import { useDataViz } from '../../api/profiles';
import { useProvider } from '../Provider';

export const ConnectedDataViz: React.FC<ConnectedDataVizProps> = ({
  dataVizSlug,
  showGeog,
  geog: propsGeog,
  variant,
  onExplore,
}) => {
  const { geog } = useProvider();
  const usedGeog = React.useMemo(() => propsGeog || geog, [geog, propsGeog]);
  const { dataViz, isLoading, error } = useDataViz(dataVizSlug, usedGeog);

  if (!!error) {
    return <ErrorMessage title={`$Not Found`} message={`${error}`} />;
  }
  return (
    <DataViz
      dataViz={dataViz}
      geog={usedGeog}
      showGeog={showGeog}
      isLoading={isLoading}
      error={error}
      variant={variant}
      onExplore={onExplore}
    />
  );
};
