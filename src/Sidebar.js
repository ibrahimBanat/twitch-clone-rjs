import React from 'react'
import Channel from './Channel'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className='sidebar__top'>

                <h5>FOLLOWED CHANNELS</h5>
                <Channel avatar='https://pbs.twimg.com/media/ETkIcD9XgAI8rC7.png'
                    name='Sub-try'
                    followers='450k'/>
                <Channel avatar='https://pbs.twimg.com/media/ES8dJM-X0AAZjDZ.png'
                    name='Afrodite Gal'
                    followers='1.2M'/>
                <h5>RECOMMENDED CHANNELS</h5>
                <Channel avatar='https://img1.pnghut.com/4/0/5/ebu8Dy1suK/facial-expression-fictional-character-face-internet-forum-mammal.jpg'
                    name='Dwg UI'
                    followers='11k'/>

                <p className="sidebar__topShowMore">Show More</p>
            
            </div>
            <div className="sidebar__bottom">
                <div className="sidebar__bottomContainer">
                    <i className="fas fa-search"></i>
                    <input type="text" placeholder='Search to Add Friends'/>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
