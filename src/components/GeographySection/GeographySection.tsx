/**
 *
 * GeographySection
 *
 */
import React from 'react';
import '../../styles/global.css';

import styles from './GeographySection.module.css';
import { GeographySectionProps } from './types.js';
import { Heading } from '../Heading';
import { BreadcrumbItem, Breadcrumbs } from '../Breadcrumbs';
import { GeogBrief, GeographyType } from '../../types';

export const GeographySection: React.FC<GeographySectionProps> = (props) => {
  const { geog, geogIsLoading, headingLevel = 1 } = props;

  let hierarchy: GeogBrief[] = [
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
      {!!geogIsLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className={styles.header}>
            {!!geog && (
              <>
                <Breadcrumbs>
                  {hierarchy.concat(geog.hierarchy.concat(geog)).map((item) => (
                    <BreadcrumbItem key={item.name}>
                      {item.title}
                    </BreadcrumbItem>
                  ))}
                </Breadcrumbs>
                <Heading className={styles.heading} level={headingLevel}>
                  {geog.title}
                </Heading>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};
