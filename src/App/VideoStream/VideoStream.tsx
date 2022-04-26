import React, { useCallback, useContext } from 'react';
import useRecorder from 'react-hook-recorder';
import { VideoContext } from '../Context/VideoContext';

function VideoStream() {
  const { startRecording, stopRecording, register, status } = useRecorder();
  const { addVideo } = useContext(VideoContext);

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
  }, [status]);

  return (
    <div className="flex flex-col bg-slate-900 items-center flex-shrink-0">
      <video className="w-1/2 " ref={register} autoPlay muted playsInline></video>
      <div className="bg-black flex flex-grow w-1/2 justify-center relative">
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
