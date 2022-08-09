import React from 'react';
import VideoItem from './VideoItem';

class VideoList extends React.Component{
    
    render(){
        const videos = this.props.videos.map( (video) => {
            return <VideoItem key={video.id.videoId} video={video} onVideoSelect={this.props.onVideoSelect}/>
        });
        return (
            <div className="ui relaxed divided list">{videos}</div>
        );
    }


}

export default VideoList;