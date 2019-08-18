import React from 'react'
import '../css/VideoItem.css'
const VideoItem = (props) => {
    return(
        <div onClick={() => props.onVideoSelect(props.itemprops)} className="video-item item">
            <img alt={props.itemprops.snippet.title} className="ui image" src={props.itemprops.snippet.thumbnails.medium.url}/>
            <div className="content">
                <div className="header">
                    {props.itemprops.snippet.title}
                </div>            
            </div>
        </div>
    )
}

export default VideoItem