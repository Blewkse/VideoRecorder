import React, { useCallback, useContext } from 'react';
import { VideoContext } from '../Context/VideoContext';

function VideoStream() {
  const { addVideo, startRecording, stopRecording, register, status } = useContext(VideoContext);

  const onStop = useCallback(
    (blob, blobUrl) => {
      addVideo(blobUrl);
    },
    [addVideo]
  );
  const onClick = useCallback(() => {
    if (status === 'init') {
      return;
    }
    if (status !== 'recording') {
      startRecording();
      return;
    }
    stopRecording(onStop)();
  }, [status, stopRecording, onStop, startRecording]);

  return (
    <div className="flex flex-col bg-slate-900 items-center">
      <video className="flex flex-grow" ref={register} autoPlay muted playsInline></video>
      <div className="bg-black flex justify-center relative">
        {status !== 'recording' ? (
          <div
            className="bg-red-500 w-14 h-14 rounded-full absolute hover:cursor-pointer z-50 bottom-4 border-2 border-white active:scale-75 transition duration-100"
            onClick={onClick}></div>
        ) : (
          <div
            className="bg-red-800 w-14 h-14 rounded-full absolute hover:cursor-pointer z-50 bottom-4 active:scale-75 transition duration-100 "
            onClick={onClick}></div>
        )}
      </div>
    </div>
  );
}

export default VideoStream;
