import React from 'react';
import { MenuItem } from './types';
import { Menu } from '../Menu';
import { Item } from '@react-stately/collections';

interface Props {
  onMenuItemClick: (key: React.Key) => void;
  menuItems: MenuItem[];
}

export function DataVizMenu(props: Props) {
  const { onMenuItemClick, menuItems } = props;
  return (
    <Menu items={menuItems} onAction={onMenuItemClick}>
      {(item) => (
        <Item key={item.key}>
          <div>{item.icon}</div>
          <div>{item.label}</div>
        </Item>
      )}
    </Menu>
  );
}
