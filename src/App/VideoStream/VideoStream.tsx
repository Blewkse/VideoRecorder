import React, { useCallback, useContext } from 'react';
import { VideoContext } from '../Context/VideoContext';

function VideoStream() {
  const { addVideo, startRecording, stopRecording, register, status, imageCanvas, videoRef } =
    useContext(VideoContext);

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
      console.log(imageCanvas);
      startRecording();
      return;
    }
    stopRecording(onStop)();
  }, [status, stopRecording, onStop, imageCanvas, startRecording]);

  const refVid = useCallback(
    (el: HTMLVideoElement) => {
      if (!videoRef) {
        return;
      }
      videoRef.current = el;
      register(el);
    },
    [register, videoRef]
  );

  if (imageCanvas && videoRef) {
    return (
      <div className="flex flex-col bg-slate-900 items-center">
        <video
          className="flex flex-grow"
          ref={refVid}
          autoPlay
          muted
          playsInline
          id="video"></video>
        {imageCanvas !== undefined && <canvas ref={imageCanvas}></canvas>}
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
}

export default VideoStream;
