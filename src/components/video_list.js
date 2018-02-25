import React from 'react';
import ReactDOM from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const VideoItems = props.videos.map((video, index) => {
        return <VideoListItem 
                    onVideoSelect = {props.onVideoSelect} 
                    video = {video} 
                    key = {index}
                />
    })
    return(
        <ul className = 'col-md-4 list-group'>
           {VideoItems}
        </ul>
    )
}

export default VideoList;