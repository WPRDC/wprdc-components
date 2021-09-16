import * as React from 'react';

import { ContactCardProps } from './types';
import { DataChip } from '../DataChip';

export const ContactCard: React.FC<ContactCardProps> = ({ asset }) => {
  return (
    <div className="">
      {!!asset.location.properties.fullAddress && (
        <DataChip
          value={asset.location.properties.fullAddress}
          aria-label={'address'}
          icon={'map'}
        />
      )}
      {!!asset.phone && (
        <DataChip
          value={asset.phone}
          href={`tel:${asset.phone}`}
          aria-label={'phone number'}
          icon="phone"
        />
      )}
      {!!asset.email && (
        <DataChip
          value={asset.email}
          href={`mailto:${asset.email}`}
          aria-label={'email address'}
          icon="mail"
        />
      )}
      {!!asset.url && (
        <DataChip
          value={asset.url}
          href={asset.url}
          aria-label={'website'}
          icon="link"
        />
      )}
    </div>
  );
};
