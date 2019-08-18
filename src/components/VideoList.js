import React from 'react'
import VideoItem from './VideoItem'
const VideoList = (props) => {
    const Item = props.videosprops.map((vid)=> {
        
        return <VideoItem key={vid.id.videoId} onVideoSelect={props.onVideoSelect} itemprops={vid}/>
    })
    return (
        <div className="ui relaxed divided list" >
            {Item}
        </div>
    )
}

export default VideoList