import React from "react";
import ButtonProps from "../types/buttonProps";

export default class GenericButton extends React.Component <ButtonProps, {}> {
  constructor(props: ButtonProps) {
    super(props);
  }

  render() {
    return <button
      onClick={this.props.onClick}
      tabIndex={this.props.tabIndex}
      className="text-slate-600 backdrop-blur dark:text-slate-400 bg-slate-300/20 dark:bg-slate-700/20 p-2 px-4 rounded-lg font-semibold">
      {this.props.children}
    </button>;
  }
}
