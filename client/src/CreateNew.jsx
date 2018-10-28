import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import PropTypes from "prop-types";

import api from "./api";

const { TextArea } = Input;

class CreateNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      text: "",
      loading: false,
    };
  }
  handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };
  createNote = () => {
    this.setState({
      loading: true,
    });
    const { text, title } = this.state;
    api.notes
      .create(title, text)
      .then(response => {
        this.props.createdNew(response.data.result);
        this.setState({
          text: "",
          title: "",
        });
      })
      .finally(() => {
        this.setState({
          loading: false,
        });
      });
  };
  render() {
    return (
      <Form>
        <Input
          name="title"
          placeholder="Title"
          value={this.state.title}
          onChange={this.handleInputChange}
        />
        <TextArea
          name="text"
          autosize
          placeholder="Place note here"
          value={this.state.text}
          onChange={this.handleInputChange}
        />
        <Button
          type="primary"
          loading={this.state.loading}
          onClick={this.createNote}
          disabled={this.state.loading}
        >
          Create
        </Button>
      </Form>
    );
  }
}

CreateNew.propTypes = {
  createdNew: PropTypes.func.isRequired,
};

export default CreateNew;
