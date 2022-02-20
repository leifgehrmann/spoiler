import React from "react";
import ButtonProps from "../types/buttonProps";
import GenericButton from "./GenericButton";

export default class CopyToClipboardButton extends React.Component <ButtonProps, {}> {
  constructor(props: ButtonProps) {
    super(props);
  }

  render() {
    return <GenericButton
      tabIndex={this.props.tabIndex}
    >
      Copy to clipboard
    </GenericButton>;
  }
}
