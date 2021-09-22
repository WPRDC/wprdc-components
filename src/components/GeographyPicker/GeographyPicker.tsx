import * as React from 'react';
import { useMemo, useState } from 'react';
import '../../styles/global.css';

import { RiRoadMapFill as MapIcon } from 'react-icons/ri';

import styles from './GeographyPicker.module.css';
import { GeographyPickerProps } from './types';
import { Tooltip } from '../Tooltip';
import GeographyPickerMenu from './GeographyPickerMenu';
import { GeogBrief } from '../../types';
import { useField } from '@react-aria/label';
import { getGeogIDTitle } from '../../util/formatters';

export function GeographyPicker(props: GeographyPickerProps) {
  const [isOpen, setIsOpen] = useState<boolean>();
  const [geog, setGeog] = useState<GeogBrief>();

  let { labelProps, fieldProps, descriptionProps, errorMessageProps } =
    useField({ ...props, labelElementType: 'span' });

  const { onSelection } = props;

  const value: string | undefined = useMemo(
    () => geog && JSON.stringify(geog),
    [geog]
  );

  const displayValue: string | undefined = useMemo(
    () => (geog ? getGeogIDTitle(geog) : 'Pick a geography'),
    [geog]
  );

  function handleSelection(geog: GeogBrief) {
    setGeog(geog);
    if (!!onSelection) {
      onSelection(geog);
    }
    setIsOpen(false);
  }

  return (
    <div className={styles.container}>
      {props.label && (
        <div className={styles.label}>
          <span {...labelProps}>{props.label}</span>
        </div>
      )}
      <input hidden aria-hidden="true" {...fieldProps} value={value} />
      <Tooltip
        size="full"
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        title={'Select an area'}
        content={
          <GeographyPickerMenu
            selectedGeog={geog}
            onSelection={handleSelection}
          />
        }
      >
        <div className={styles.input}>
          <div className={styles.icon}>
            <MapIcon aria-hidden="true" className="w-5 h-5 text-gray-500" />
          </div>
          <div className={styles.valueBox}>{displayValue}</div>
        </div>
      </Tooltip>
      {props.description && (
        <div {...descriptionProps} className={styles.description}>
          {props.description}
        </div>
      )}
      {props.errorMessage && (
        <div {...errorMessageProps} className={styles.error}>
          {props.errorMessage}
        </div>
      )}
    </div>
  );
}

export default GeographyPicker;
