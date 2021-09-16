/**
 *
 * AssetDetails
 *
 * Displays details about an asset.
 *
 */
import * as React from 'react';
import { AssetDetailsProps } from './types';
import { CategoryHeader } from './CategoryHeader';
import Tags from '../Tags';
import { ContactCard } from './ContactCard';

import styles from './AssetDetails.module.css';
import { Heading } from '../Heading';
import classNames from 'classnames';

export const AssetDetails: React.FC<AssetDetailsProps> = ({
  asset,
  headingLevel,
  fullWidth,
}) => {
  const title = headingLevel ? (
    <Heading level={headingLevel} className="my-0.5 font-bold text-2xl">
      {asset.name}
    </Heading>
  ) : (
    <p className="my-0.5 font-bold text-2xl">{asset.name}</p>
  );

  const width = !!fullWidth ? 'w-full' : 'w-max';

  return (
    <div className={classNames([styles.container, width])}>
      <div>
        <CategoryHeader category={asset.category} />
        {title}
      </div>
      <div className={styles.tabs}>
        <Tags tags={asset.assetTypes.map((at) => ({ label: at.title }))} />
      </div>
      <div className={styles.content}>
        <ContactCard asset={asset} />
      </div>
    </div>
  );
};

export default AssetDetails;
