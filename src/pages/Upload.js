import React from 'react';

const Upload = () => {
  return (
    <div className="container upload">
      <div className="upload-left">
        <h1>Upload Video</h1>
        <p>This video will be published to @aniak100</p>
        <div className="video-box"></div>
      </div>

      <div className="upload-right">
        <form action="">
          <div className="form-control">
            <label htmlFor="caption">Caption</label>
            <input type="text" id="caption" />
          </div>

          <div className="form-control">
            <label htmlFor="video">Video url</label>
            <input type="text" id="video" />
          </div>

          <button type="submit">Post</button>
        </form>
      </div>
    </div>
  );
};

export default Upload;
