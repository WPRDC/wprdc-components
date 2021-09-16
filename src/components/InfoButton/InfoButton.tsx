/**
 *
 * InfoButton
 *
 * Button with attached popover&#x27;
 *
 */
import * as React from 'react';
import '../../styles/global.css';

import { InfoButtonProps } from './types';
import { useOverlayTriggerState } from '@react-stately/overlays';
import {
  OverlayContainer,
  useOverlayPosition,
  useOverlayTrigger,
} from '@react-aria/overlays';
import { useButton } from '@react-aria/button';
import { Popover } from '../Popover/Popover';

import { RiInformationFill, RiInformationLine } from 'react-icons/ri';

export const InfoButton: React.FC<InfoButtonProps> = (props) => {
  const { title, variant, content, ...overlayTriggerProps } = props;
  let state = useOverlayTriggerState(overlayTriggerProps);

  let triggerRef = React.useRef(null);
  let overlayRef = React.useRef<HTMLDivElement>(null);
  let { triggerProps, overlayProps } = useOverlayTrigger(
    { type: 'dialog' },
    state,
    triggerRef
  );
  let { overlayProps: positionProps } = useOverlayPosition({
    targetRef: triggerRef,
    overlayRef,
    placement: 'top',
    offset: 5,
    isOpen: state.isOpen,
  });

  let { buttonProps } = useButton(
    {
      onPress: () => state.open(),
    },
    triggerRef
  );

  const Icon = React.useMemo(
    () => (variant === 'line' ? RiInformationLine : RiInformationFill),
    [variant]
  );

  return (
    <>
      <button {...buttonProps} {...triggerProps} ref={triggerRef}>
        <Icon />
      </button>
      {state.isOpen && (
        <OverlayContainer>
          <Popover
            {...overlayProps}
            {...positionProps}
            ref={overlayRef}
            title={title}
            isOpen={state.isOpen}
            onClose={state.close}
          >
            <div>{content}</div>
          </Popover>
        </OverlayContainer>
      )}
    </>
  );
};

export default InfoButton;
