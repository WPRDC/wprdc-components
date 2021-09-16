import {
  RiBusLine,
  RiCommunityLine,
  RiContactsLine,
  RiGroupLine,
  RiMailLine,
  RiMapPinLine,
  RiPagesLine,
  RiPhoneLine,
  RiUser3Line,
  RiDatabase2Fill,
} from 'react-icons/ri';
import { DataChipIcon } from './types';

export const icons: { [key in DataChipIcon]: any } = {
  map: RiMapPinLine,
  phone: RiPhoneLine,
  contacts: RiContactsLine,
  person: RiUser3Line,
  group: RiGroupLine,
  community: RiCommunityLine,
  bus: RiBusLine,
  link: RiPagesLine,
  mail: RiMailLine,
  database: RiDatabase2Fill,
};
