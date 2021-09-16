/**
 *
 * SourceList
 *
 */
import React from 'react';
import { SourceBase } from '../../types';

import '../../styles/global.css';
import styles from './SourceList.module.css';
import { DataChip } from '../DataChip';
import { Tooltip } from '../Tooltip';
import { Link } from '../Link';

interface Props {
  sources: SourceBase[];
}

export function SourceList(props: Props) {
  const { sources } = props;

  return (
    <div className={styles.container}>
      <div className={styles.title}>Sources</div>
      <ul className={styles.list}>
        {sources.map((source) => (
          <li key={source.slug} className={styles.listItem}>
            <Tooltip
              title={source.name}
              content={
                <>
                  <Link external href={source.infoLink}>
                    {source.infoLink}
                  </Link>
                  <p>{source.description}</p>
                </>
              }
            >
              <DataChip value={source.name} icon="database" color="primary" />
            </Tooltip>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SourceList;
