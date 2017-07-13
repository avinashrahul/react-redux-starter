import React from 'react';

// For a functional component props will be as argument
// for class component props can be anywhere by this.props
const VideoList = (props) => {
  return(
    <ul className="col-md-4 list-group">
      {props.videos.length}
    </ul>
  );
}

export default VideoList;
