/* eslint-disable */
import React, { Component } from 'react';
import modal from './modal.module.scss';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: this.props.index
        };
    }
    changeImage = (index) => {
        this.setState({
            index: index
        })
    }
    render() {
        const folder = this.props.folder;
        const image = this.props.images[this.state.index]; // Gallary Image
        const cnt = this.props.images.length; // 이미지 개수        
        const thumbnails = this.props.images.map((image, index) => { // 썸네일 이미지
            if (index === this.state.index) { // 썸네일 이미지 : Gallary
                var ClassName = modal.CurrentImage;
            }
            return (
                <button className={ClassName} onClick={() => this.changeImage(index)}>
                    <img className={modal.ImageView} src={`projects/${folder}/${image}.png`}></img>
                </button>
            )
        })
        return (
            <div className={modal.Modal} onClick={this.props.close}>
                <section onClick={(e) => e.stopPropagation()}> {/*모달 영역 클릭시 닫히지 않도록 설정*/}
                    <header>
                        <h5>{this.props.title}</h5>
                        <p>{this.props.subtitle}</p>
                        <i class="fas fa-times" onClick={this.props.close}></i>
                    </header>
                    <div className={modal.Gallary}>
                        <i style={{ left: "1%" }} class="fas fa-chevron-left" onClick={() => this.changeImage(((this.state.index - 1) + cnt) % cnt)}></i>
                        <div className={modal.Slide}>
                            <img src={`projects/${folder}/${image}.png`}></img>
                        </div>
                        <i style={{ right: "1%" }} class="fas fa-chevron-right" onClick={() => this.changeImage(((this.state.index + 1) + cnt) % cnt)}></i>
                    </div>
                    <footer>
                        {thumbnails}
                    </footer>
                </section >
            </div >
        )
    }
}

export default Modal;