/* eslint-disable */
import React, { Component } from 'react';
import styles from '../../styles.module.scss';
import footer from './footer.module.scss';
import { useState, useEffect } from 'react'
class Footer extends Component {
    render() {
        return (
            <footer className={footer.Footer}>
                <div>
                    <img id={this.test} src='footer/stamp.png'></img>
                </div>
            </footer >
        )
    }
}

export default Footer;