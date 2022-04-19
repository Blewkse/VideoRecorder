import React from 'react';
import useRecorder from 'react-hook-recorder';

function VideoStream() {
  const { startRecording, stopRecording, register, status } = useRecorder();
  return (
    <div className="flex bg-green-500 flex-grow-0">
      <video className="w-4/5 " ref={register} autoPlay muted playsInline />
    </div>
  );
}

export default VideoStream;
