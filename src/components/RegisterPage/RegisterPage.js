/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
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
        <div className="RegisterPage-container">
          <h1>{title}</h1>
          <div>
            <TextBox placeholder="请输入邮箱"/>
            <TextBox placeholder="请输入密码" type="password"/>
          </div>
        </div>
      </div>
    );
  }

}

export default RegisterPage;
