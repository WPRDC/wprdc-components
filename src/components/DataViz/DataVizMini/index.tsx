/**
 *
 * DataVizPreview
 *
 */
import React, { memo } from 'react';
import Measure from 'react-measure';
import { DataVizMiniProps } from '../types';
import { MissingVizMessage } from '../../MissingVizMessage';

export const DataVizMini = memo((props: DataVizMiniProps) => {
  const { dataViz, geogIdentifier, colorScheme, CurrentViz, error } = props;

  /* Keep track fo dimensions to send to vega charts */
  const [{ width, height }, setDimensions] = React.useState({
    width: 0,
    height: 0,
  });
  return (
    <div className="relative">
      <Measure
        bounds
        onResize={(contentRect) => {
          if (contentRect.bounds) setDimensions(contentRect.bounds);
        }}
      >
        {({ measureRef }) => (
          <div ref={measureRef}>
            <div
              className="rounded"
              aria-label="data presentation preview"
              style={{ maxWidth: !!error ? 'size-3000' : undefined }}
            >
              {!!error && <MissingVizMessage error={error} />}
              {!error && !!CurrentViz && !!dataViz && !!geogIdentifier && (
                <CurrentViz
                  dataViz={dataViz}
                  geog={geogIdentifier}
                  colorScheme={colorScheme}
                  vizHeight={height - 15}
                  vizWidth={width - 35}
                />
              )}
            </div>
          </div>
        )}
      </Measure>
    </div>
  );
});
