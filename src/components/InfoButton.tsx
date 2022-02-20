import React from "react";
import infoDark from "../assets/info-dark.svg";
import infoLight from "../assets/info-light.svg";
import ButtonProps from "../types/buttonProps";
import GenericButton from "./GenericButton";

export default class InfoButton extends React.Component <ButtonProps, {}> {
  constructor(props: ButtonProps) {
    super(props);
  }

  render() {
    return <GenericButton
      onClick={this.props.onClick}
      tabIndex={this.props.tabIndex}
      >
      <picture>
        <source
          srcSet={infoDark}
          media="(prefers-color-scheme: dark)"/>
        <img src={infoLight} alt="Info"/>
      </picture>
    </GenericButton>;
  }
}
