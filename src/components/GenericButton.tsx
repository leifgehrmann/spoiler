import React from 'react';
import ButtonProps from '../types/buttonProps';

export default function GenericButton(props: ButtonProps) {
  const { onClick, tabIndex, children } = props;
  return (
    <button
      type="button"
      onClick={onClick}
      tabIndex={tabIndex}
      className="text-slate-600 backdrop-blur dark:text-slate-400 bg-slate-300/20 dark:bg-slate-700/20 p-2 px-4 rounded-lg font-semibold"
    >
      {children}
    </button>
  );
}
