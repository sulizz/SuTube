import { connect } from 'react-redux';
import {
  requestVideo,
  requestAllVideos,
  LikeVideo,
  unLikeVideo,
  deleteVideo,
} from "../../../actions/video_actions";
import VideoShow from './video_show';

//when the video is clicked on index render the display page
//also render other videos on the side, which which cliks redirect to that show page
//need id of that video being clicked
//route {/videos/{video.id}}
const mapStateToProps = (state, ownProps) => {
    //return { videos: Object.values(state.entities.video) }
    //get one video

    // let video = state.entities.video[ownProps.match.params.videoId];
    let currentUser = state.session.currentUser
    // let currentUserLike = state.entities.video.id;
    const videos = state.entities.video;
    const currentVideo = videos[ownProps.match.params.videoId];

    return {
        video: currentVideo,
        currentUser: currentUser
    }
};

const mapDispatchToProps = (dispatch) => ({
    requestVideo: (videoId) => dispatch(requestVideo(videoId)),
    requestAllVideos: () => dispatch(requestAllVideos()),
    LikeVideo: id => dispatch(LikeVideo(id)),
    unLikeVideo: id => dispatch(unLikeVideo(id)),
    deleteVideo: videoId => dispatch(deleteVideo(videoId))
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoShow);