/* eslint-disable */
import styles from '../../styles.module.scss';
import React, { Component } from 'react';

class Left extends Component {
  render() {
    return (
      <div className={styles.left}>
        <h5>{this.props.title}</h5>
        <a href={this.props.add} target="_blank">{this.props.add}</a>
      </div>
    );
  }
}

export default Left;