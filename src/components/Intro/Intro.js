import styles from '../../styles.module.scss';
import intro from './intro.module.scss';
import React, { Component } from 'react';
class Content extends Component {
    render() {
        const data = this.props.data;
        return (
            <section className={intro.Intro}>
                <div>
                    <h2>{data.subject}</h2>
                    <div className={styles.border_top}></div>
                    <div className={styles.border_bot}></div>
                    <p className={intro.content}>{data.content}</p>
                </div>
            </section >
        )
    }
}

export default Content;