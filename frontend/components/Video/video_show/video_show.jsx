import VideoIndexItem from '../video_index/video_index_container'
import { Link, withRouter } from 'react-router-dom';
import { formatDateTime } from '../../../utils/date_util'
import CommentIndexContainer from '../../comments/comment_index_container'
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";

import React from 'react';
class VideoShow extends React.Component {
    constructor(props){
        super(props);
    }
 
    componentDidMount() {
        // this.props.requestVideo(this.props.match.params.videoId);
        this.props.requestAllVideos()
    }

    componentDidUpdate(oldProps) {
        // this.props.requestAllVideos();
        if (oldProps.video && oldProps.video.id != this.props.match.params.videoId) {
            this.props.requestVideo(this.props.match.params.videoId);
        }
    }

    render() {

        const { video, currentUser} = this.props
        if (!video) {
            return null;
        }

        let display;
        if (currentUser.id === video.uploader_id) {
            display = 'Edit'
        }

        let likeButtonText = <ThumbUpAltIcon className='initial-Like'/>;
        let likeButtonAction = () => this.props.LikeVideo(video.id);
        if (video.liked_by_current_user) {
            likeButtonText = <ThumbUpAltIcon className ='after-liked'/>;
            likeButtonAction = () => this.props.unLikeVideo(video.id);
        }
 
        return (
          <div>
            <div className="main-display">
              <div className="video-display">
                <video className="video_url" key={video.videoUrl} controls>
                  <source src={video.videoUrl} type="video/mp4" />
                </video>
                <h1 className="title-text"> {video.title} </h1>

                <div className="views-date">
                  <div className="left">
                    <h1> {video.views} views </h1>
                    <h1>{formatDateTime(video.created_at)}</h1>
                </div>

                  <div className="middle">
                    <span onClick={likeButtonAction}>{likeButtonText}</span>
                    <span>{video.likes}</span>
                  </div>
                    <MoreVertIcon />
                </div>

                <div className="user-info">
                  <h1 className="user-name"> {video.username}</h1>
                </div>

                <h1> {video.description} </h1>
                <Link to={`/edit/${video.id}`}>{display}</Link>
              </div>

              <div className="side-bar-display">
                <Link to={`/videos/${video.id}`}>
                  <VideoIndexItem />
                </Link>
              </div>
            </div>

            <div className="comments-column">
              <CommentIndexContainer video={video} />
            </div>
          </div>
        );
    }
    
}

export default VideoShow;