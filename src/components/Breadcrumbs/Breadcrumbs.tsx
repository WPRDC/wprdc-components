/**
 *
 * Breadcrumbs
 *
 * [ Hierarchical links for navigating back. ]
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { Item, Breadcrumbs as RSBreadcrumbs } from '@adobe/react-spectrum';

import { BreadcrumbsProps } from './types';

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  children,
  ...props
}) => {
  let renderItems = null;
  if (items) {
    if (children) {
      // eslint-disable-next-line no-console
      console.warn(
        'Warning - Both items and children were provided.  Children will be ignoted.',
      );
    }
    renderItems = items.map(({ label, ...props }) => (
      <Item {...props}>{label}</Item>
    ));
  }

  return <RSBreadcrumbs {...props}>{renderItems || children}</RSBreadcrumbs>;
};

export default Breadcrumbs;
