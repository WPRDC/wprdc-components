/**
 *
 * DataVizCard
 *
 */
import React, { useMemo } from 'react';
import Measure from 'react-measure';
import { SourceList } from '../../SourceList';
import { LoadingMessage } from '../../LoadingMessage';
import { MissingVizMessage } from '../../MissingVizMessage';
import { DataVizCardProps } from '../types';
import { Button } from '../../Button';
import '../../../styles/global.css';
import styles from './DataVizCard.module.css';

import {
  RiBarChart2Fill,
  RiMapFill,
  RiNumbersFill,
  RiTableFill,
} from 'react-icons/ri';
import { DataVizType } from '../../../types';
import { Skeleton } from './Skeleton';
import { getGeogIDTitle } from '../../../util/formatters';

export function DataVizCard(props: DataVizCardProps) {
  const {
    dataViz,
    geog,
    showGeog,
    colorScheme,
    CurrentViz,
    isLoading,
    // menu,
    onExplore,
    error,
  } = props;
  const { name, description, vizType } = dataViz || {};

  /* Keep track fo dimensions to send to vega charts */
  const [{ width, height }, setDimensions] = React.useState({
    width: 0,
    height: 0,
  });

  function handleExplore() {
    if (!!onExplore && !!dataViz) onExplore(dataViz);
  }

  const Icon = React.useMemo(() => {
    switch (vizType) {
      case DataVizType.Table:
        return RiTableFill;
      case DataVizType.Chart:
        return RiBarChart2Fill;
      case DataVizType.MiniMap:
        return RiMapFill;
      default:
        return RiNumbersFill;
    }
  }, [vizType]);

  const geogTitle: string | undefined = useMemo(() => {
    if (showGeog && !!geog) {
      return ` in ${getGeogIDTitle(geog)}`;
    }
    return undefined;
  }, [geog, showGeog]);

  if (isLoading) {
    return <Skeleton />;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.typeLabel}>
          <Icon className={styles.typeIcon} />
          <span>{vizType}</span>
        </div>
        <h6 className={styles.title}>
          {name}
          {geogTitle}
        </h6>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.dataViz}>
        <Measure
          bounds
          onResize={(contentRect) => {
            if (contentRect.bounds) setDimensions(contentRect.bounds);
          }}
        >
          {({ measureRef }) => (
            <div ref={measureRef}>
              <div
                aria-label="data presentation preview"
                className={styles.vizPane}
              >
                {isLoading && <LoadingMessage />}
                {!!error && <MissingVizMessage error={error} />}
                {!isLoading && !!CurrentViz && !!dataViz && !!geog && (
                  <CurrentViz
                    dataViz={dataViz}
                    geog={geog}
                    colorScheme={colorScheme}
                    vizHeight={height - 15}
                    vizWidth={width - 15}
                  />
                )}
              </div>
            </div>
          )}
        </Measure>
      </div>
      <div className={styles.extras}>
        <div className={styles.sources}>
          {!!dataViz && !!dataViz.sources && (
            <SourceList sources={dataViz.sources} />
          )}
        </div>
      </div>
      <div className={styles.menuSection}>
        <div className="flex">
          <div className="flex-grow" />
          <div>
            <Button onPress={handleExplore} elevated>
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
