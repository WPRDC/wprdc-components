/**
 *
 * DataVizPreview
 *
 */
import React, { memo } from 'react';
import '../../../styles/global.css';
import Measure from 'react-measure';
import { DataVizPreviewProps } from '../types';
import { MissingVizMessage } from '../../MissingVizMessage';
import { LoadingMessage } from '../../LoadingMessage';

export const DataVizPreview = memo((props: DataVizPreviewProps) => {
  const { dataViz, geog, colorScheme, CurrentViz, isLoading, error } = props;

  /* Keep track fo dimensions to send to vega charts */
  const [{ width, height }, setDimensions] = React.useState({
    width: 0,
    height: 0,
  });

  return (
    <div className="max-w-md min-h-0 h-full rounded-t overflow-auto flex">
      <Measure
        bounds
        onResize={(contentRect) => {
          if (contentRect.bounds) setDimensions(contentRect.bounds);
        }}
      >
        {({ measureRef }) => (
          <div
            ref={measureRef}
            className="rounded min-h-0 flex-grow"
            aria-label="data presentation preview"
          >
            {isLoading && <LoadingMessage name="preview" />}
            {!!error && <MissingVizMessage error={error} />}
            {!!CurrentViz && !!dataViz && !!geog && (
              <CurrentViz
                inPreview
                dataViz={dataViz}
                geog={geog}
                colorScheme={colorScheme}
                vizHeight={height - 15}
                vizWidth={width - 35}
              />
            )}
          </div>
        )}
      </Measure>
    </div>
  );
});
