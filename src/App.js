import React from 'react';
import logo from './logo.svg';
import './App.css';
var marked = require('marked');

var defaultText = document.getElementById('defaultText').value;

var InputBox = React.createClass({
  handleChange: function () {
  },
  render: function () {
    return (
      <textarea
        className='input-text'
        onChange={this.props.changeParent}
        defaultValue={this.props.inputTextVal} />
    )
  }
});

var OutputBox = React.createClass({
  htmlCreator: function () {
    return { __html: this.props.outputTextVal };
  },
  render: function () {
    return (
      <div className='output-text' dangerouslySetInnerHTML={this.htmlCreator()} />
    )
  }
});

var App = React.createClass({
  getInitialState: function () {
    return {
      inputTextVal: defaultText
    }
  },
  handleChange: function (event) {
    this.setState({
      inputTextVal: event.target.value
    });
  },
  render: function () {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Markdown Previewer</h2>
        </div>
        <div className="in-out-panel">
          <InputBox
            changeParent={this.handleChange}
            inputTextVal={this.state.inputTextVal} />
          <OutputBox outputTextVal={marked(this.state.inputTextVal)} />
        </div>
      </div>
    );
  }
});

module.exports = App;
