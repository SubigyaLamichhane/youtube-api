import React from 'react';

class VideoDescription extends React.Component{
    

    render(){
        
        if(!this.props.video){
            return(
                <div>Loading...</div>
            );
        }
        const videoSrc = `https://www.youtube.com/embed/${this.props.video.id.videoId}`;
        return(
           <div> 
               {/* <iframe  width="100%" height = "700px" src={videoSrc} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen /> */}
               <div className="ui embed">
                   <iframe src={videoSrc} />
               </div>
               <div className='ui segment'>
                    <h4 className = "ui header">{this.props.video.snippet.title}</h4>
                    <p>{this.props.video.snippet.description}</p>
               </div>
 
            </div>
        );
    }
}

export default VideoDescription;