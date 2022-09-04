import React from 'react';
import ButtonProps from '../types/buttonProps';
import crossDark from '../assets/cross-dark.svg';
import crossLight from '../assets/cross-light.svg';

export default function ClearButton(props: ButtonProps) {
  const { onClick, tabIndex } = props;
  return (
    <button
      type="button"
      onClick={onClick}
      tabIndex={tabIndex}
      aria-label="Clear"
      className="p-2 rounded-lg"
    >
      <picture>
        <source
          srcSet={crossDark}
          media="(prefers-color-scheme: dark)"
        />
        <img src={crossLight} alt="Clear" />
      </picture>
    </button>
  );
}
