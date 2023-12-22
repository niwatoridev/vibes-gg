import './VideoHeader.css';
import headerVideoSrc from './media/header-video1.mov';
import { useEffect, useRef, useState } from 'react';





function VideoHeader() {

    const videoHeader = useRef(null)
    const videoRef = useRef();

    const attemptPlay = () => {
        videoHeader &&
            videoHeader.current &&
            videoHeader.current.play().catch(error => console.error("Error attempting to autoplay Header Video", error))
    }

    useEffect(() => {
        attemptPlay();
    }, []);

    const VideoHeaderRender = () => {
        return <div className='videoContainer'>
            <video ref={videoHeader} src={headerVideoSrc} loop muted alt="Header Video" id='headerVideo'></video>
        </div>
    }

    return (
        VideoHeaderRender()
    );
}

export default VideoHeader;