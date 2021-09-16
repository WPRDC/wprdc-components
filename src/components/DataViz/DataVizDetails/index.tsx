/**
 *
 * DataVizDetails
 *
 */
import React from 'react';
import Measure from 'react-measure';
import { SourceList } from '../../SourceList';
import { LoadingMessage } from '../../LoadingMessage';
import { MissingVizMessage } from '../../MissingVizMessage';
import { DataVizDetailsProps } from '../types';
import { Heading } from '../../Heading';

export function DataVizDetails(props: DataVizDetailsProps) {
  const {
    dataViz,
    geogIdentifier,
    colorScheme,
    CurrentViz,
    isLoading,
    error,
    headingLevel = 3,
  } = props;
  const { name, description } = dataViz || {};
  /* Keep track fo dimensions to send to vega charts */
  const [{ width, height }, setDimensions] = React.useState({
    width: 0,
    height: 0,
  });

  return (
    <div className="relative">
      <div className="">
        <div>
          <Heading level={headingLevel} className="text-4xl font-bold">
            {name}
          </Heading>
          <p className="text-lg my-1 pt-0.5 pb-1 border-b">{description}</p>
        </div>
      </div>
      <Measure
        bounds
        onResize={(contentRect) => {
          if (contentRect.bounds) setDimensions(contentRect.bounds);
        }}
      >
        {({ measureRef }) => (
          <div ref={measureRef}>
            <div className="h-64 p-1.5" aria-label="data presentation">
              {!!error && <MissingVizMessage error={error} />}
              {isLoading && <LoadingMessage />}
              {!isLoading && !!CurrentViz && !!dataViz && !!geogIdentifier && (
                <CurrentViz
                  dataViz={dataViz}
                  geog={geogIdentifier}
                  colorScheme={colorScheme}
                  vizHeight={height - 15}
                  vizWidth={width - 15}
                />
              )}
            </div>
          </div>
        )}
      </Measure>
      <div className="pl-1.5 py-0">
        {!!dataViz && !!dataViz.sources && (
          <SourceList sources={dataViz.sources} />
        )}
      </div>
    </div>
  );
}
