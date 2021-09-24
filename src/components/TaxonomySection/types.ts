/**
 *
 * TaxonomySection types
 *
 **/
import { DataVizBase, GeogBrief, Indicator, Taxonomy } from '../../types';
import { FC, Key } from 'react';
import { BreadcrumbItemLinkProps } from '../Breadcrumbs';

export interface TaxonomySectionProps extends SectionSharedProps {
  taxonomy: Taxonomy;

  currentDomainSlug?: string;
  currentDomainHref?: string;

  currentSubdomainSlug?: string;
  currentSubdomainHref?: string;

  currentIndicatorSlug?: string;
  currentIndicatorHref?: string;

  currentDataVizSlug?: string;
  currentDataVizHref?: string;

  LinkComponent?: FC<
    BreadcrumbItemLinkProps<HTMLAnchorElement> & { href: string }
  >;

  onTabsChange?: (tab: Key) => any;
}

export interface SectionSharedProps {
  geog?: GeogBrief;
  onExploreIndicator?: (indicator: Indicator) => unknown;
  onExploreDataViz?: (dataViz: DataVizBase) => unknown;
}
