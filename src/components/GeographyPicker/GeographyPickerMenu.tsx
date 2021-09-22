/**
 *
 * GeographyPicker
 *
 * Used to select a geographic area
 *
 */
import * as React from 'react';
import { useMemo, useState } from 'react';
import '../../styles/global.css';
import styles from './GeographyPickerMenu.module.css';

import { GeographyPickerMenuProps } from './types';
import { MENU_LAYERS } from './settings';
import { Select } from '../Select';
import { LayerPanelVariant, Map, MapEventExtras } from '../Map';
import { GeogBrief, GeogLevel } from '../../types';
import { MapEvent } from 'react-map-gl';
import { makeGeogSearchBox } from '../SearchBox';

import { Item } from '@react-stately/collections';

export const GeographyPickerMenu: React.FC<GeographyPickerMenuProps> = ({
  selectedGeog,
  onSelection,
}) => {
  const [geogType, setGeogType] = useState<GeogLevel>(
    MENU_LAYERS.find((layer) => layer.id === selectedGeog?.geogType) ||
      MENU_LAYERS[0]
  );

  function handleGeogSelection(geog: GeogBrief) {
    if (!!onSelection) onSelection(geog);
  }

  const handleClick: (evt: MapEvent, extras?: MapEventExtras) => void = (
    _,
    extras
  ) => {
    if (!!extras && !!extras.menuGeog) handleGeogSelection(extras.menuGeog);
  };

  const GeogSearchBox = useMemo(() => {
    return makeGeogSearchBox(geogType.id);
  }, [geogType]);

  const geogTypeSelection: Set<string> = useMemo(() => {
    if (!!geogType) return new Set([geogType.id]);
    return new Set();
  }, [geogType]);

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <div className={styles.menuItem}>
          <div className={styles.dropdown}>
            <div className={styles.labelText}>Pick a type of area</div>
            <Select<typeof MENU_LAYERS[0]>
              aria-label="Type of area"
              items={MENU_LAYERS}
              selectedKey={geogType.id}
              onSelection={(item) => setGeogType(item)}
            >
              {(item) => <Item key={item.id}>{item.name}</Item>}
            </Select>
          </div>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.dropdown}>
            <div className={styles.labelText}>Search for a {geogType.name}</div>
            <GeogSearchBox
              aria-label={geogType.name}
              onSelection={handleGeogSelection}
            />
          </div>
        </div>
      </div>
      <div className={styles.map}>
        <Map
          defaultViewport={{ zoom: 7 }}
          layerPanelVariant={LayerPanelVariant.None}
          menuGeogTypes={MENU_LAYERS}
          onClick={handleClick}
          menuGeogTypesSelection={geogTypeSelection}
          selectedGeog={selectedGeog}
        />
      </div>
    </div>
  );
};

export default GeographyPickerMenu;
