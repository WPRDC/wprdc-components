import * as React from 'react';
import { useEffect, useState } from 'react';
import {
  DataVizID,
  GeogIdentifier,
  GeographyType,
  Indicator,
  Taxonomy,
} from '../../types';
import TaxonomySection from './TaxonomySection';
import { ProfilesAPI } from '../../api';
import { useProvider } from '../Provider';

export default {
  title: 'Taxonomy Section',
  component: TaxonomySection,
};

const DEFAULT_GEOG: GeogIdentifier = {
  id: 104,
  geogType: GeographyType.County,
  geogID: '42003',
};

export const Default = () => {
  const context = useProvider();
  const [taxonomy, setTaxonomy] = useState<Taxonomy>();
  const [domainSlug, setDomainSlug] = useState<React.Key>('dev');
  const [subdomainSlug, _] = useState<React.Key>('dev');
  const [indicatorSlug, setIndicatorSlug] = useState<React.Key>();
  const [dataVizSlug, setDataVizSlug] = useState<React.Key>();

  useEffect(() => {
    ProfilesAPI.requestTaxonomy().then((response) =>
      setTaxonomy(response.data?.results)
    );
    context.fetchAndSetGeog(DEFAULT_GEOG);
  }, []);

  function handleExploreIndicator(indicator: Indicator) {
    setIndicatorSlug(indicator.slug);
  }
  function handleExploreDataViz(dataViz: DataVizID) {
    console.log({ dataViz });
    setDataVizSlug(dataViz.slug);
  }

  return (
    <div>
      {!!taxonomy && (
        <TaxonomySection
          taxonomy={taxonomy}
          geog={context.geog}
          currentDomainSlug={domainSlug as string}
          currentDomainHref={'/#'}
          onTabsChange={setDomainSlug}
          currentSubdomainSlug={subdomainSlug as string}
          currentSubdomainHref={'/#'}
          currentIndicatorHref={'/#'}
          currentIndicatorSlug={indicatorSlug as string}
          currentDataVizHref={'/#'}
          currentDataVizSlug={dataVizSlug as string}
          onExploreIndicator={handleExploreIndicator}
          onExploreDataViz={handleExploreDataViz}
        />
      )}
    </div>
  );
};
