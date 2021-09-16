import * as React from 'react';

import styles from './DomainSection.module.css';
import SubdomainSection from './SubdomainSection';
import { Domain } from '../../types';
import { SectionSharedProps } from './types';

interface Props extends SectionSharedProps {
  domain: Domain;
}

export default function DomainSection({
  domain,
  geog,
  onExploreDataViz,
  onExploreIndicator,
}: Props) {
  return (
    <div id={domain.slug} className={styles.wrapper}>
      <h3 className={styles.title}>{domain.name}</h3>
      <div className={styles.description}>{domain.description}</div>
      {domain.subdomains.map((subdomain) => (
        <SubdomainSection
          key={subdomain.slug}
          subdomain={subdomain}
          geog={geog}
          onExploreDataViz={onExploreDataViz}
          onExploreIndicator={onExploreIndicator}
        />
      ))}
    </div>
  );
}
