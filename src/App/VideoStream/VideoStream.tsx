import React, { useCallback, useContext, useState } from 'react';
import { VideoContext } from '../Context/VideoContext';
import BlurVideo from './BlurVideo';

function VideoStream() {
  const { addVideo, startRecording, stopRecording, register, videoRef, isBlur, status } =
    useContext(VideoContext);

  const [blobBlur, setBlobBlur] = useState<Blob | Uint8Array>();

  const onStopTrue = useCallback(
    (blob, blobUrl) => {
      addVideo(blobUrl);
    },
    [addVideo]
  );

  const onStopFalse = useCallback((blob, blobUrl) => {
    return null;
  }, []);
  const onClick = useCallback(() => {
    console.log(status);
    if (status === 'init') {
      return;
    }

    if (status !== 'recording') {
      startRecording();
      return;
    } else {
      if (isBlur) {
        console.log(blobBlur);
        // const blobBlubCast = blobBlur. as Blob;
        // onStop(blobBlur, URL.createObjectURL(blobBlubCast));
        stopRecording(onStopFalse)();
        return;
      }
      stopRecording(onStopTrue)();
    }
  }, [status, startRecording, isBlur, stopRecording, onStopTrue, blobBlur, onStopFalse]);

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

  const onFinishBlurRecord = useCallback((blobUrl: Blob | Uint8Array | undefined) => {
    console.log(blobUrl);
    setBlobBlur(blobUrl);
  }, []);

  return (
    <div className="flex flex-col bg-slate-900 items-center">
      {isBlur && videoRef?.current != null && (
        <BlurVideo
          video={videoRef.current}
          status={status}
          onFinishBlurRecord={() => onFinishBlurRecord(blobBlur)}
        />
      )}
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
