import React, { Component } from "react";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnchor,
} from "@fortawesome/free-solid-svg-icons";

import EditableLabel from "./editableLabel";

class TestPage extends Component {
  constructor(props) {
    super(props);
    this.props = props;

    this.state = {
      labelToEdit: "Editable label with ",
      labelToEdit2: ""
    };
  }

  changeLabelEvent = label => {
    this.setState({ labelToEdit: label });
  };

  changeLabelEvent2 = label => {
    this.setState({ labelToEdit2: label });
  };

  render() {
    return (
      <div>
        <h3>A simple editable label component</h3>
        <p>
          Hover over the label to show icon. Click to open and edit the label.
        </p>
        <EditableLabel
          labelValue={this.state.labelToEdit}
          editChangeEvent={this.changeLabelEvent}
        />

        <EditableLabel
          placeholder="placeholder text"
          labelValue={this.state.labelToEdit2}
          editChangeEvent={this.changeLabelEvent2}
          customEditIconStyle={{ color: "orange" }}
          customCancelIconStyle={{ color: "red" }}
          customApproveIconStyle={{ color: "green" }}
          placeholderStyle={{ color: "gray" }}
        />

        <EditableLabel
          placeholder="custom editable label"
          labelValue={this.state.labelToEdit2}
          editChangeEvent={this.changeLabelEvent2}
          customEditIconStyle={{ color: "#000080" }}
          customEditIcon={<FontAwesomeIcon icon={faAnchor}/>}
        />
      </div>
    );
  }
}

export default TestPage;
