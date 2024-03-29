/**
 *
 * DetailsHeader types
 *
 **/
import { Described } from '../../types/profiles/common';
import { GeogBrief } from '../../types';
import { HeadingLevel } from '../Heading';

export interface DetailsHeaderProps<T extends Described = Described> {
  item: T;
  headingLevel?: HeadingLevel;
  geog?: GeogBrief;
}
