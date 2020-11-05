import React from 'react'

const RecentItem = ( {url, title} ) => {
    return (
        <div className="item">
            <iframe 
                width="400" 
                height="235" 
                src={url} 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>

            </iframe>
            <div className="item__details">
                img
            </div>
        </div>
    )
}

export default RecentItem
