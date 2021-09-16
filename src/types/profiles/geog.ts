import { Described } from './common';

export interface Geog extends Described, GeogBase {
  title: string;
  hierarchy: GeogDescriptor[];
  resourcetype: string; // todo: make enums of the resourcetypes for use here.
  population: number;
  geogType: GeographyType;
  geogID: string;
}

export enum GeographyType {
  BlockGroup = 'blockGroup',
  Tract = 'tract',
  CountySubdivision = 'countySubdivision',
  SchoolDistrict = 'schoolDistrict',
  County = 'county',
  Neighborhood = 'neighborhood',
  ZCTA = 'zcta',
  State = 'state',
}

export interface GeogTypeDescriptor {
  name: string;
  id: GeographyType;
  tableName: string;
  cartoSql: string;
  description: string;
}

export interface GeogLoadPayload {
  geogType: GeographyType;
  geogs: GeogDescriptor[];
}

export interface GeogDescriptor extends GeogIdentifier {
  id: string | number;
  title: string;
}

export interface GeogIdentifier {
  id: string | number;
  title?: string;
  name?: string;
  geogType: GeographyType;
  geogID: string;
}

export interface GeogBase {
  name: string;
  slug: string;
  description?: string;
}
