/**
 *
 * AssetDetails types
 *
 **/
import { Asset, AssetCategory, AssetID } from '../../types/communityAssets';
import { ViewStyleProps } from '@react-types/shared';

export interface AssetDetailsProps {
  asset: Asset;
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  viewProps?: ViewStyleProps;
  fullWidth?: boolean;
}

export type AssetDetailStyleProps = Omit<AssetDetailsProps, 'asset'>;

export interface CategoryHeaderProps {
  category: AssetCategory;
}

export interface ConnectedAssetDetailsProps extends AssetDetailStyleProps {
  id: AssetID;
  name?: string;
}

export interface ContactCardProps {
  asset: Asset;
}
