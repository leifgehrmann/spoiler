import React from 'react';

export default interface ButtonProps extends React.PropsWithChildren<any> {
  tabIndex: number;
  onClick: React.MouseEventHandler;
}
