import React from 'react';
import ButtonProps from '../types/buttonProps';
import GenericButton from './GenericButton';

export default function CopyToClipboardButton(props: ButtonProps) {
  const { onClick, tabIndex } = props;
  return (
    <GenericButton
      onClick={onClick}
      tabIndex={tabIndex}
    >
      Copy to clipboard
    </GenericButton>
  );
}
