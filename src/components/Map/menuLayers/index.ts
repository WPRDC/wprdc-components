import county from './county';
import countySubdivision from './countySubdivision';
import tract from './tract';
import blockGroup from './blockGroup';
import { GeographyType } from '../../../types';
import { MenuLayerItem } from '../types';

const availableMenuLayers: Record<GeographyType, MenuLayerItem> = {
  [GeographyType.County]: county,
  [GeographyType.CountySubdivision]: countySubdivision,
  [GeographyType.BlockGroup]: blockGroup,
  [GeographyType.Tract]: tract,
  [GeographyType.SchoolDistrict]: tract,
  [GeographyType.Neighborhood]: tract,
  [GeographyType.ZCTA]: tract,
};
export default availableMenuLayers;
