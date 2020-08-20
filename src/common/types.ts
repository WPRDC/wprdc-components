import * as React from 'react';
import PropTypes from 'prop-types';

export interface BaseProps {
  /** awwwwww they look just like you! */
  children?: React.ReactNode;
}

export interface DataSource {
  url: string;
  name: string;
}

export const dataSourcePropType = PropTypes.shape({
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
});

export interface CKANCDataSource extends DataSource {
  resource: CKANResource;
}

export interface CKANResource {
  id: string;
  title: string;
  slug: string;
  package?: CKANPackage;
}

export interface CKANPackage {
  id: string;
  title: string;
  slug: string;
  resources?: Array<CKANResource>;
}
