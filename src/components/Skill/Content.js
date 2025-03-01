/* eslint-disable */
import styles from '../../styles.module.scss';
import React, { Component } from 'react';

class Content extends Component {
    render() {
        var content = this.props.content;
        const tags = content.map((tag) => (
            <li>{tag}</li>
        ))
        return (
            <div>
                <ul>{tags}</ul>
            </div>
        )
    }
}

export default Content;