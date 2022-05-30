import React, { useCallback, useContext, useRef } from 'react';
import { VideoContext } from '../Context/VideoContext';
import useVideoBlur from './useVideoBlur';

function VideoStream() {
  const { addVideo, startRecording, stopRecording, register, status, videoRef, isBlur } =
    useContext(VideoContext);

  const imageCanvas = useRef<HTMLCanvasElement>();

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

  const refCanvas = useCallback(
    (el: HTMLCanvasElement) => {
      isBlur ? (imageCanvas.current = el) : (imageCanvas.current = undefined);
    },
    [isBlur]
  );

  useVideoBlur({
    videoRef: videoRef?.current,
    isBlur: isBlur,
    imageCanvas: imageCanvas?.current
  });

  console.log('ping videostream');

  return (
    <div className="flex flex-col bg-slate-900 items-center">
      {isBlur && <canvas className="flex flex-grow z-30 absolute" ref={refCanvas} />}
      <video className="flex flex-grow " ref={refVid} autoPlay muted playsInline />
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
