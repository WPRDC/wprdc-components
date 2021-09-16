/**
 *
 * Indicator
 *
 * A related collection of data vizes.
 *
 */
import * as React from 'react';
import '../../styles/global.css';
import styles from './IndicatorView.module.css';

import { IndicatorViewProps } from './types';
import { Divider } from '../Divider';
import { Button } from '../Button';
import { ConnectedDataViz, DataVizVariant } from '../DataViz';
import classNames from 'classnames';
import { DataVizID, DataVizType } from '../../types';

export const IndicatorView: React.FC<IndicatorViewProps> = ({
  indicator,
  card,
  onExploreDataViz,
  onExploreIndicator,
}) => {
  const {
    name,
    description,
    // slug,
    // longDescription,
    // limitations,
    // importance,
    // source,
    // provenance,
    dataVizes,
  } = indicator;

  // load first data viz (will eventually be some sort of master one or something)
  const primaryDataViz = !!dataVizes && dataVizes[0];

  const { blurbs, vizes } = dataVizes.reduce<
    Record<'blurbs' | 'vizes', DataVizID[]>
  >(
    (record, viz) => {
      if (viz.vizType === DataVizType.BigValue) {
        return { blurbs: [...record.blurbs, viz], vizes: record.vizes };
      }
      return { blurbs: record.blurbs, vizes: [...record.vizes, viz] };
    },
    { blurbs: [], vizes: [] }
  );

  function handleExploreIndicator() {
    if (onExploreIndicator) onExploreIndicator(indicator);
  }

  return (
    <div
      className={classNames(styles.container, { [styles.containerCard]: card })}
    >
      {card && (
        <div className={styles.vizPane}>
          {card && primaryDataViz && (
            <ConnectedDataViz
              variant={DataVizVariant.Preview}
              key={primaryDataViz.slug}
              dataVizID={primaryDataViz}
              onExplore={onExploreDataViz}
            />
          )}
        </div>
      )}
      <div
        className={classNames(styles.details, { [styles.stretchy]: !!card })}
      >
        <div>
          {!!name && (
            <div className="flex">
              <div className="flex-grow">
                <h5 className={card ? styles.title : styles.bigTitle}>
                  {name}
                </h5>
              </div>
              <div>{/* todo: add menu button*/}</div>
            </div>
          )}
        </div>
        <div className={styles.descriptionContainer}>
          <p
            className={classNames({
              [styles.description]: !card,
              [styles.cardDescription]: card,
            })}
          >
            {description}
          </p>
        </div>
      </div>

      {!card && (
        <>
          <div className={styles.blurbs}>
            <h6 className={styles.subtitle}>Quick Facts</h6>
            <ul className={styles.blurbList}>
              {blurbs.map((blurb) => (
                <li className={styles.blurbListItem}>
                  <ConnectedDataViz
                    variant={DataVizVariant.Blurb}
                    dataVizID={blurb}
                    onExplore={onExploreDataViz}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.vizes}>
            <h6 className={styles.subtitle}>Tables and Visualizations</h6>
            <ul className={styles.vizList}>
              {vizes.map((viz) => (
                <li className={styles.vizListItem}>
                  <ConnectedDataViz
                    variant={DataVizVariant.Card}
                    dataVizID={viz}
                    onExplore={onExploreDataViz}
                  />
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
      {card && (
        <>
          <Divider weight="thin" />
          <div className={styles.menuSection}>
            <div className="flex">
              <div />
              <div className="flex-grow" />
              <Button onPress={handleExploreIndicator}>Explore</Button>
            </div>
          </div>
        </>
      )}
      {!card && <div></div>}
    </div>
  );
};

export default IndicatorView;
