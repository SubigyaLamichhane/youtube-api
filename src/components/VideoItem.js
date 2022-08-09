import './VideoItem.css';
import React from 'react';

class VideoItem extends React.Component{
    render(){
        
        const { thumbnails, title } = this.props.video.snippet;
        const {url, height, width} = thumbnails.medium;
        return (
            <div onClick={()=>this.props.onVideoSelect(this.props.video)} className="video-item item">
                <img  className = "ui image" src = {url} alt = "Video-thumbnail" />
                {/* // style = {{height: height, width: width}} */}
                <div className="content">
                    <div className = "header">{title}</div>
                </div>
            </div>
        );
    }
}

export default VideoItem;