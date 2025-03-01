/* eslint-disable */

import styles from '../../styles.module.scss';
import React, { Component } from 'react';
import Modal from '../Modal/Modal';
import { Link } from 'react-router-dom';
class Right extends Component {
  constructor() {
    super();
    this.state = {
      imgIndex: null,
      modalOn: false
    }
  }
  // 모달의 상태 변경(index)
  test = (index) => {
    this.setState({
      imgIndex: index,
      modalOn: !this.state.modalOn
    });
  }
  render() {
    const content = this.props.content; // 내용
    const keywords = this.props.keywords.map((keyword) => (
      <span className={styles.keyword}>{keyword}</span>
    ));
    const folder = this.props.folder;
    const tags = content.map((tag) => {
      if (tag.sub.length) {
        const subs = <ul>{tag.sub.map((sub) => (
          <li>{sub}</li>
        ))}</ul>
        //details : 접었다 펼칠 수 있게 해줌, summary : 세부정보
        return <li className={styles.details}><details><summary>{tag.main}</summary>{subs}</details></li>
      }
      return <li>{tag.main}</li>
    })

    const images = this.props.images.map((image, index) => ( // projects-contents-images
      <img className={styles.ImageView} src={`projects/${folder}/${image}.png`} onClick={() => this.test(index)}></img> // () => : 인자전달, 바로 실행x
    ))

    const pdfs = this.props.pdfs.map((pdf) => <Link to={`/pdfviewer/${folder}/${pdf}`} target="_blank">PDF GO</Link>)

    return (
      <div className={styles.right}>
        <div>
          <h5>{this.props.title}</h5>
          <p>{this.props.subtitle}</p>
          <ul>{tags}</ul>
        </div>
        <div>
          {images}
        </div>
        <div>
          {keywords}
        </div>
        <div>
          {pdfs}
        </div>
        {/* 이미지 클릭시 test()실행과 모달로 이미지의 src, index, 프로젝트 제목, folder명 전달*/}
        {this.state.modalOn && (<Modal index={this.state.imgIndex} close={() => this.test(null)} images={this.props.images} title={this.props.title} subtitle={this.props.subtitle} folder={this.props.folder}></Modal>)}
      </div>
    );
  }
}

export default Right;