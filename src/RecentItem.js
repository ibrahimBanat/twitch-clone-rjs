import React from 'react'
import './RecentItem.css'

const RecentItem = ( {url, title} ) => {
    return (
        <div className="item">
            <iframe 
                width="400" 
                height="253" 
                src={url}
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

            </iframe>
            <div className="item__details">
                <img src="https://static-cdn.jtvnw.net/ttv-boxart/Among%20Us.jpg"/>
                <div className="item__detailsText">
                    <h4>{title}</h4>
                    <p>Sub-try</p>
                    <p>Strategy & Survival</p>
                </div>
            </div>
        </div>
    )
}

export default RecentItem
