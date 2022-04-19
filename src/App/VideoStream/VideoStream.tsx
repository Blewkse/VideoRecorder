import React from 'react';

function VideoStream() {
  return (
    <div className="flex bg-green-500 border border-red-500 gap-4 flex-grow-0">
      <video
        className="w-4/5 "
        src="https://file-examples.com/storage/fe3f5fc9646254aafa134d8/2017/04/file_example_MP4_1920_18MG.mp4"
        autoPlay
        muted
        loop
      />
    </div>
  );
}

export default VideoStream;
