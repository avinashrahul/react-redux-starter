import React from 'react';
import VideoListItem from './video_list_item';

// For a functional component props will be as argument
// for class component props can be anywhere by this.props
// you can pass data from Parent component (index.js) to child component here snd used by props
const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return <VideoListItem key={video.etag} video={video} onVideoSelect={props.onVideoSelect}/>
  });
  return(
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
}

export default VideoList;
