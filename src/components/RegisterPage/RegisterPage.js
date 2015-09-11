/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import withStyles from '../../decorators/withStyles';
import styles from './RegisterPage.css';
import TextBox from '../TextBox'

@withStyles(styles)
class RegisterPage {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  render() {
    let title = 'New User Registration';
    this.context.onSetTitle(title);
    return (
      <div className="RegisterPage">
        <form onSubmit={this.handleSubmit.bind(this)} className="RegisterPage-container">
          <h1>{title}</h1>
          <div>
            <TextBox
              placeholder="请输入邮箱"
              ref="username" />
            <TextBox
              placeholder="请输入密码"
              type="password"
              ref="password" />
          </div>
          <button className="btn">注册</button>
        </form>
      </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault();

    var username = ReactDOM.findDOMNode(this.refs.username).value.trim();
    var password = ReactDOM.findDOMNode(this.refs.password).value.trim();

    if (!username || !password) {
      return;
    }
    // TODO: send request to the server
    ReactDOM.findDOMNode(this.refs.password).value = '';
    ReactDOM.findDOMNode(this.refs.username).value = '';
    console.log(username, password);
    return;
  }

}

export default RegisterPage;
