import * as React from 'react';
import { useState } from 'react';
import {
  GeogIdentifier,
  GeographyType,
  ProfilesAPI,
  SearchBox,
  Taxonomy,
} from '../src';
import TaxonomySection from '../src/components/TaxonomySection';

export default {
  title: 'Index',
  component: SearchBox,
};

const DEFAULT_GEOG: GeogIdentifier = {
  id: 104,
  geogType: GeographyType.County,
  geogID: '42003',
};

export const Default = () => {
  const [taxonomy, setTaxonomy] = useState<Taxonomy>();
  ProfilesAPI.requestTaxonomy().then((response) =>
    setTaxonomy(response.data?.results)
  );

  return (
    <div>
      {!!taxonomy && (
        <TaxonomySection taxonomy={taxonomy} geog={DEFAULT_GEOG} />
      )}
    </div>
  );
};
