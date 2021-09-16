import React from 'react';
import { ComboBox, Item } from './';

export default {
  title: 'ComboBox',
  component: ComboBox,
};

export const Default = () => (
  <ComboBox label="Favorite Animal">
    <Item key="red panda">Red Panda</Item>
    <Item key="cat">Cat</Item>
    <Item key="dog">Dog</Item>
    <Item key="aardvark">Aardvark</Item>
    <Item key="kangaroo">Kangaroo</Item>
    <Item key="snake">Snake</Item>
  </ComboBox>
);
