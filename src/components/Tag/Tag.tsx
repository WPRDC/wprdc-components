/**
 *
 * Tag
 *
 *  Little bit of metadata.
 *
 */

import * as React from 'react';

import { TagProps } from './types';

import '../../styles/global.css';
import styles from './Tag.module.css';
import classNames from 'classnames';

export const Tag: React.FC<TagProps> = ({ label, variant = 'default' }) => {
  return (
    <div className={classNames([styles.wrapper, styles[variant]])}>
      <p className={styles.label}>{label}</p>
    </div>
  );
};

export default Tag;
