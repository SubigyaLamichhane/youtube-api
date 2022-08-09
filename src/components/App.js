import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import youtube from '../apis/Youtube';
import VideoList from './VideoList';
import VideoDescription from './VideoDescription'


const k = 'AIzaSyCxuPFjttzSPJC2JhDoqszbcZ4FW-W5gQs';

class App extends React.Component{
    state = { videos: [], video: null, selectedVideo: null };
    
    componentDidMount(){
        this.onSearchSubmit('');
    }
    
    onSearchSubmit = async (term) => {
        console.log(term);
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                key: k,
                q: term
            }
        });
        let a=0;
        for(var i=0;i<5;i++){
            if(response.data.items[i].id.videoId){
                a=i;
                break;
            } 
        }
        

        this.setState( {videos : response.data.items, selectedVideo: response.data.items[a]} );
    };
    
    onVideoSelect = (video) => {
        console.log(video);
       this.setState({selectedVideo: video}); 
    }

    render(){
        return (
            <div className="ui" style={{margin: '0px 25px'}}>
                <div><SearchBar onSubmit = {this.onSearchSubmit} /></div>
               <div className="ui grid">
                   <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDescription video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList videos= {this.state.videos} onVideoSelect={this.onVideoSelect} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;