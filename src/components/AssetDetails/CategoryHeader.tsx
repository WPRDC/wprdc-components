import * as React from 'react';
import '../../styles/global.css';

import { CategoryHeaderProps } from './types';
import { AssetCategoryName } from '../../types/communityAssets';
import {
  RiBusFill,
  RiCommunityFill,
  RiGovernmentFill,
  RiGroupFill,
  RiHandCoinFill,
  RiHeartFill,
  RiHome8Fill,
  RiPencilFill,
  RiRestaurantFill,
} from 'react-icons/ri';

export const CategoryHeader: React.FC<CategoryHeaderProps> = ({ category }) => {
  return (
    <header>
      <div>
        <CategoryIcon
          slug={category.name}
          className="h-3 text-gray-700 inline-block"
        />
        <span className="ml-0.5 text-gray-700 uppercase text-xs inline-block">
          {category.title}
        </span>
      </div>
    </header>
  );
};

interface CategoryIconProps extends Record<string, any> {
  slug: AssetCategoryName;
}

const CategoryIcon: React.FC<CategoryIconProps> = ({ slug, ...iconProps }) => {
  const categoryIcons = {
    'non-profit': RiCommunityFill,
    transportation: RiBusFill,
    business: RiHandCoinFill,
    housing: RiHome8Fill,
    health: RiHeartFill,
    food: RiRestaurantFill,
    'education/youth': RiPencilFill,
    'community-center': RiGroupFill,
    civic: RiGovernmentFill,
  };
  const Icon = categoryIcons[slug];
  return <Icon {...iconProps} />;
};
