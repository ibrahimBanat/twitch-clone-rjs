import React from 'react'
import './Stream.css'
const Stream = () => {
    return (
        <div className="stream">
            <div className="stream__statusContainer">
                <div className="stream__statusContainerTop">
                    <div className="stream__statusIndicator">OFFLINE</div>
                    <h2>Check out the below streams from Sub-try</h2>
                </div>
                <div className="stream__statusInfo">
                    <i className="fas fa-bell"></i>
                    <p>You will be notified when Sub-try is live</p>
                </div>
            </div>
            <div className="stream__videoEmbed">
            <iframe 
            width="500" 
            height="295" 
            src="https://www.youtube.com/embed/rbd3DRvRepY" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
            </div>
            
        </div>
    )
}

export default Stream
