import React from "react";
import ButtonProps from "../types/buttonProps";
import crossDark from "../assets/cross-dark.svg";
import crossLight from "../assets/cross-light.svg";

export default class ClearButton extends React.Component <ButtonProps, {}> {
  constructor(props: ButtonProps) {
    super(props);
  }

  render() {
    return <button
      onClick={()=>{alert('clear!')}}
      tabIndex={this.props.tabIndex}
      aria-label="Clear"
      className="p-2 rounded-lg"
    >
      <picture>
        <source
          srcSet={crossDark}
          media="(prefers-color-scheme: dark)"/>
        <img src={crossLight} alt="Clear"/>
      </picture>
    </button>;
  }
}
