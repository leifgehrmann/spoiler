import React from 'react';
import infoDark from '../assets/info-dark.svg';
import infoLight from '../assets/info-light.svg';
import ButtonProps from '../types/buttonProps';
import GenericButton from './GenericButton';

export default function InfoButton(props: ButtonProps) {
  const { onClick, tabIndex } = props;
  return (
    <GenericButton
      onClick={onClick}
      tabIndex={tabIndex}
    >
      <picture>
        <source
          srcSet={infoDark}
          media="(prefers-color-scheme: dark)"
        />
        <img src={infoLight} alt="Info" />
      </picture>
    </GenericButton>
  );
}
