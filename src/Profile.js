import React from 'react'
import './Profile.css'
import RecentItem from './RecentItem'

const Profile = () => {
    return (
        <div className="profile">
            <div className="profile__topLeft">
                <img src="https://pbs.twimg.com/media/ETkIcD9XgAI8rC7.png"/>
                <h1>Sub-try</h1>
                <h3>450k followers</h3>
            </div>
            <div className="profile__topRight">
                <i className="fas fa-heart graybg"></i>
                <i className="fas fa-bell graybg"></i>
                <i className="fas fa-ellipsis-v"></i>
            </div>
            <div className="profile__menu">
                <h2 className="active">Home</h2>
                <h2>About</h2>
                <h2>Schadule</h2>
                <h2>Videos</h2>
                <h2><i className="fas fa-arrow-up"></i></h2>
                <h2>Chat</h2>
            </div>
            <div className="profile__recent">
                <h2>Recent Broadcasts</h2>
                <div className="profile__recentItems">
                    <RecentItem
                        url={'https://www.youtube.com/embed/cNCi3MwdcHo'}
                        title={'This 5 detectives among us game went terribly wrong...'}/>
                    <RecentItem
                        url={'https://www.youtube.com/embed/rbd3DRvRepY'}
                        title={'🔴 Can this 5200 IQ incognito strat save the game...?'}/>
                    <RecentItem
                        url={'https://www.youtube.com/embed/ICWPW_4tOPU'}
                        title={'🔴 Hafu Gets 3 Kills in 1 Round in a 1v7 Situation as Impostor '}/>
                    <RecentItem
                        url={'https://www.youtube.com/embed/1dufsHSi_G4'}
                        title={'🔴 I exposed the impostors with this task trick in Among Us'}/>
                </div>
                <div className="profile__categories">
                    <h2>Sub-try's recently streamed Categories</h2>
                    <div className="profile__categoriesPhotos">

                        <img src="https://static-cdn.jtvnw.net/ttv-boxart/Among%20Us.jpg"/>
                        <img src="https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends.jpg"/>
                        <img src="https://static-cdn.jtvnw.net/ttv-boxart/Just%20Chatting.jpg"/>
                    </div>

                    <h3>Strategy & Survival</h3>
                </div>
            </div>
            
        </div>
    )
}

export default Profile
