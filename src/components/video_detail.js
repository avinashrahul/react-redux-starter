import React from 'react';

const VideoDetail = ({video}) => {
  if(!video) {
    return <div> Hold On..</div>;
  }
  const videoId = video.id.videoId;
  // const videoUrl = 'https://www.youtube.com/embed/' + videoId;
  const videoUrl = `https://www.youtube.com/embed/${videoId}`; // is same as above line whish is ES6 way
  return (
      <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={videoUrl} />
        </div>
        <div className="details">
          <div>{video.snippet.title}</div>
          <div>{video.snippet.description}</div>
        </div>
      </div>
  );
};

export default VideoDetail;
