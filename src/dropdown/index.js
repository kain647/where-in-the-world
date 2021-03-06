import React, { Component } from "react";
import {
  Selector,
  DropdownContainer,
  Option,
  MainButton,
} from "../dropdown/styled";

class Dropdown extends Component {
  state = {
    expanded: false,
    value: this.props.options[0],
  };

  toggle = () => {
    const { expanded } = this.state;
    this.setState({
      expanded: !expanded,
    });
  };

  handleSelect = (item) => {
    this.setState({
      expanded: false,
      value: item,
    });
    this.props.onChange(item);
  };

  render() {
    const { expanded, value } = this.state;
    const { options } = this.props;
    const renderOptions = options.map((item) => {
      return (
        <Option
          key={item.label}
          onClick={() => {
            this.handleSelect(item);
          }}
        >
          {item.label}
        </Option>
      );
    });

    return (
      <DropdownContainer>
        <MainButton
          label={value.label}
          onClick={this.toggle}
          visible={!expanded}
        />
        {expanded && <Selector>{renderOptions}</Selector>}
      </DropdownContainer>
    );
  }
}

export default Dropdown;
