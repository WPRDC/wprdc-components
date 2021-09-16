/**
 *
 * Breadcrumbs types
 *
 **/
import { FC, HTMLAttributes, Key, ReactChild, Ref } from 'react';

import {
  AriaBreadcrumbItemProps,
  AriaBreadcrumbsProps,
} from '@react-types/breadcrumbs';

export interface BreadcrumbsProps<T> extends AriaBreadcrumbsProps<T> {
  showCurrent?: boolean;
  bigTitle?: boolean;
  titleElement?: keyof JSX.IntrinsicElements;
}

export interface BreadcrumbItemProps extends AriaBreadcrumbItemProps {
  key?: Key;
  hideDivider?: boolean;
  href?: string;
  LinkComponent?: FC<BreadcrumbItemLinkProps>;
  TitleComponent?: FC<BreadcrumbItemTitleProps>;
  divider?: ReactChild;
  bigTitle?: boolean;
}

export interface BreadcrumbItemLinkProps<T = HTMLElement>
  extends HTMLAttributes<HTMLElement> {
  ref?: Ref<T>;
}

export interface BreadcrumbItemTitleProps<T = HTMLElement>
  extends HTMLAttributes<HTMLElement> {
  ref?: Ref<T>;
}
