import * as React from 'react';

import styles from './TaxonomySection.module.css';
import DomainSection from './DomainSection';
import { DataVizBase, Domain, Indicator } from '../../types';
import { Tabs } from '../Tabs';
import { Item } from '@react-stately/collections';
import { TaxonomySectionProps } from './types';
import Breadcrumbs, {
  BreadcrumbItem,
  BreadcrumbItemProps,
} from '../Breadcrumbs';
import { IndicatorView } from '../IndicatorView';
import { ConnectedDataViz, DataVizVariant } from '../DataViz';

export const TaxonomySection: React.FC<TaxonomySectionProps> = ({
  taxonomy,
  geog,
  onExploreIndicator,
  onExploreDataViz,
  currentDomainSlug,
  currentDomainHref,
  currentSubdomainSlug,
  currentSubdomainHref,
  currentIndicatorSlug,
  currentIndicatorHref,
  currentDataVizSlug,
  currentDataVizHref,
  LinkComponent,
  onTabsChange,
}: TaxonomySectionProps) => {
  function handleExploreIndicator(indicator: Indicator) {
    if (!!onExploreIndicator) onExploreIndicator(indicator);
  }

  function handleExploreDataViz(dataViz: DataVizBase) {
    if (!!onExploreDataViz) onExploreDataViz(dataViz);
  }

  const currentDomain = taxonomy.find((d) => d.slug === currentDomainSlug);

  const currentSubdomain = React.useMemo(
    () =>
      currentDomain &&
      currentDomain.subdomains.find((s) => s.slug === currentSubdomainSlug),
    [currentDomainSlug, currentSubdomainSlug]
  );
  const currentIndicator = React.useMemo(
    () =>
      currentSubdomain &&
      currentSubdomain.indicators.find((i) => i.slug === currentIndicatorSlug),
    [currentDomainSlug, currentSubdomain, currentIndicatorSlug]
  );
  const currentDataViz = React.useMemo(
    () =>
      currentIndicator &&
      currentIndicator.dataVizes.find((dv) => dv.slug === currentDataVizSlug),
    [
      currentDomainSlug,
      currentSubdomain,
      currentIndicatorSlug,
      currentDataVizSlug,
    ]
  );

  let breadcrumbs: BreadcrumbItemProps[] = [];
  if (currentDomain)
    breadcrumbs.push({
      key: 'domain',
      href: currentDomainHref || `/explore/${currentDomainSlug}`,
      children: currentDomain.name,
      LinkComponent,
    });
  if (currentSubdomain)
    breadcrumbs.push({
      key: 'subdomain',
      href:
        currentSubdomainHref ||
        `/explore/${currentDomainSlug}/${currentSubdomainSlug}`,
      children: currentSubdomain.name,
      LinkComponent,
    });
  if (currentIndicator)
    breadcrumbs.push({
      key: 'indicator',
      href:
        currentIndicatorHref ||
        `/explore/${currentDomainSlug}/${currentSubdomainSlug}/${currentIndicatorSlug}`,
      children: currentIndicator.name,
      LinkComponent,
    });
  if (currentDataViz)
    breadcrumbs.push({
      key: 'dataViz',
      href:
        currentDataVizHref ||
        `/explore/${currentDomainSlug}/${currentSubdomainSlug}/${currentIndicatorSlug}/${currentDataVizSlug}`,
      children: currentDataViz.name,
      LinkComponent,
    });

  // controls tabs from outside if necessary
  let selectedDomain;
  if (!!onTabsChange) {
    selectedDomain = currentDomainSlug;
  }

  return (
    <div className={styles.wrapper}>
      <Breadcrumbs>
        {breadcrumbs.map((breadcrumb) => (
          <BreadcrumbItem {...breadcrumb} />
        ))}
      </Breadcrumbs>
      <div className={styles.content}>
        {!!currentDataViz && (
          <ConnectedDataViz
            variant={DataVizVariant.Details}
            dataVizID={currentDataViz}
            geogIdentifier={geog}
            onExplore={onExploreDataViz}
          />
        )}
        {!currentDataViz && !!currentIndicator && (
          <IndicatorView
            indicator={currentIndicator}
            onExploreDataViz={onExploreDataViz}
          />
        )}
        {!currentDataViz && !currentIndicator && (
          <Tabs<Domain>
            items={taxonomy}
            selectedKey={selectedDomain}
            onSelectionChange={onTabsChange}
          >
            {(domain) => (
              <Item key={domain.slug} title={domain.name}>
                <DomainSection
                  domain={domain}
                  geog={geog}
                  onExploreDataViz={handleExploreDataViz}
                  onExploreIndicator={handleExploreIndicator}
                />
              </Item>
            )}
          </Tabs>
        )}
      </div>
    </div>
  );
};

export default TaxonomySection;
