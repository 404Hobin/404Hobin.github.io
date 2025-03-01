import React, { Component } from 'react';
import profile from './profile.module.scss';

class Profile extends Component {
    render() {
        var data = this.props.data;
        const tags = data.contents.map((tag) => (
            <a className={profile.SpinButton} target="_blabk" title={tag.link} href={tag.link}>
                <i class={tag.style}></i>
            </a>
        ))
        return (
            <header className={profile.Profile}>
                <div>
                    <img src='profile/profile.jpg' alt='alt'></img>
                    <h1>{data.name}</h1>
                    <h3>{data.intro}</h3>
                    <div className={profile.contact}>
                        {tags}
                    </div>
                </div>
            </header >
        )
    }
}

export default Profile;