import * as React from 'react';
import { ConnectedIndicatorViewProps } from './types';
import ErrorMessage from '../ErrorMessage';
import { useIndicator } from '../../api/profiles';
import { useProvider } from '../Provider';
import { IndicatorView } from './IndicatorView';

export const ConnectedIndicatorView: React.FC<ConnectedIndicatorViewProps> = ({
  indicatorSlug,
  geogIdentifier,
  ...otherProps
}) => {
  const { geog } = useProvider();
  const geogID = React.useMemo(
    () => geogIdentifier || geog,
    [geog, geogIdentifier]
  );
  const { indicator, isLoading, error } = useIndicator(indicatorSlug);

  if (!!error) {
    return <ErrorMessage title={`Not Found`} message={error} />;
  }
  if (!!indicator) {
    return (
      <IndicatorView
        indicator={indicator}
        geogIdentifier={geogID}
        isLoading={isLoading}
        {...otherProps}
      />
    );
  }
  return <div />;
};
