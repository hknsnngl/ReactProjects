import React from 'react'

const VideoDetail = ({videoDetay}) => {
    if(!videoDetay){
        return <div>Loading</div>
    }
    const videoSrc = `https://www.youtube.com/embed/${videoDetay.id.videoId}`
    return (
        <div >
            <div className="ui embed">
                <iframe title="video player" src={videoSrc} />          
            </div>
            <div className="ui segment">
                <h4 className="ui header"> {videoDetay.snippet.title}</h4>
            </div>   
            <p>{videoDetay.snippet.description}</p>         
        </div>
    )
} 

export default VideoDetail