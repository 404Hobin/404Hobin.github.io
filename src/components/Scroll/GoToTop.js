/* eslint-disable */
import React, { Component } from 'react';
import styles from '../../styles.module.scss';
import scroll from './scroll.module.scss';
import { useState, useEffect } from 'react'

function GoToTop() {
    const [ScrollY, setScrollY] = useState(0); // 현재상태, Setter 함수
    const [BtnStatus, setBtnStatus] = useState(false);

    const handleFollow = () => {
        setScrollY(window.pageYOffset);
        if (ScrollY > 100) {
            setBtnStatus(true);
        } else {
            setBtnStatus(false);
        }
    }

    const handleTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        setScrollY(0);
        setBtnStatus(false);
    }

    useEffect(() => { // 1. mount 2. update(특정 props, state) 3. unmount
        const watch = () => {
            window.addEventListener('scroll', handleFollow)
        }
        watch();
        return () => { // useEffect에 대한 뒷정리 함수 (cleenup 함수)
            window.removeEventListener('scroll', handleFollow)
        }
    })

    return (
        <div>
            <button className={BtnStatus ? scroll.active : scroll.topBtn} onClick={handleTop}
            >TOP</button>
        </div>
    )
}

export default GoToTop;