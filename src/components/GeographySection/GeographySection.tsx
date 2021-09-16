/**
 *
 * GeographySection
 *
 */
import React from 'react';
import '../../styles/global.css';

import { DataChip } from '../DataChip';

import styles from './GeographySection.module.css';
import { GeographySectionProps } from './types.js';
import { Heading } from '../Heading';
import { BreadcrumbItem, Breadcrumbs } from '../Breadcrumbs';
import { GeogDescriptor, GeographyType } from '../../types';

export const GeographySection: React.FC<GeographySectionProps> = (props) => {
  const { geog, geogIsLoading, headingLevel = 1 } = props;

  let hierarchy: GeogDescriptor[] = [
    {
      name: 'PA',
      title: 'Pennsylvania',
      id: 0,
      geogID: '42',
      geogType: GeographyType.State,
    },
  ];

  return (
    <div className={styles.container}>
      {!!geogIsLoading && <p>Loading...</p>}
      <div className={styles.header}>
        {!!geog ? (
          <>
            <Breadcrumbs>
              {hierarchy.concat(geog.hierarchy.concat(geog)).map((item) => (
                <BreadcrumbItem key={item.name}>{item.title}</BreadcrumbItem>
              ))}
            </Breadcrumbs>
            <Heading className={styles.heading} level={headingLevel}>
              {geog.title}
            </Heading>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <ul className={styles.quickFacts}>
        <li className={styles.quickFact}>
          {!!geog && geog.population >= 0 && (
            <DataChip
              size="S"
              label="Population"
              icon="group"
              value={geog.population}
            />
          )}
        </li>
      </ul>
    </div>
  );
};
