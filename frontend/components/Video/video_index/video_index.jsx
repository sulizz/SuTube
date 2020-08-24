import React from 'react';
import VideoIndexItem from './video_index_item'

class VideoIndex extends React.Component {
    
    componentDidMount() {
        this.props.requestAllVideos()
    }

    render() {

        console.log(videos);
        const videos = this.props.videos.map(video => (
            <VideoIndexItem video={video} key={video.id} />
        ));
        
        return (
            <ul className="video-main">
                {videos}
            </ul>
        )
        return null;
    }
};

export default VideoIndex;