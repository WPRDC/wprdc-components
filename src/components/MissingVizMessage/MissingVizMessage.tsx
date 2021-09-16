/**
 *
 * MissingVizMessage
 *
 */
import React from 'react';
import { MissingVizMessageProps } from './types';

import '../../styles/global.css';
import styles from './MissingVizMessage.module.css';

export function MissingVizMessage(props: MissingVizMessageProps) {
  const { error } = props;
  return (
    <div className={styles.container}>
      <p className={styles.title}>No results</p>
      <p className={styles.message}>{error || 'Error generating data viz.'}</p>
    </div>
  );
}

export default MissingVizMessage;
