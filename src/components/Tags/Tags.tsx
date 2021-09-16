/**
 *
 * Tags
 *
 * [ Contains Tag components ]
 *
 */

import * as React from 'react';

import { TagsProps } from './types';
import Tag from '../Tag';

import styles from './Tags.module.css';

export const Tags: React.FC<TagsProps> = ({ tags, ...props }) => {
  return (
    <div {...props}>
      <ul className={styles.list}>
        {tags.map((tag) => (
          <li className={styles.listItem}>
            <Tag {...tag} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tags;
