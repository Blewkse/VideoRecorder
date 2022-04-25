import React, { useCallback, useContext, useState } from 'react';
import useRecorder from 'react-hook-recorder';
import { VideoContext } from '../Context/VideoContext';

function VideoStream() {
  const { startRecording, stopRecording, register, status } = useRecorder();
  const [url, setUrl] = useState('');
  const onStop = useCallback((blob, blobUrl) => {
    setUrl(blobUrl);
    console.log(blobUrl);
  }, []);
  const { addVideo } = useContext(VideoContext);

  const onRead = useCallback(() => {
    console.log(status);
    if (status !== 'init') {
      if (status !== 'recording') {
        startRecording();
      } else {
        stopRecording(onStop)();
      }
    }
  }, [status]);

  return (
    <div className="flex flex-col bg-green-500 items-center ">
      <video className="w-1/2 " ref={register} autoPlay muted playsInline></video>
      <div className="bg-black flex flex-grow w-1/2 justify-center">
        <div
          className="bg-red-500 w-16 h-16 rounded-full hover:cursor-pointer z-50  "
          onClick={onRead}></div>
      </div>
      <div>
        <strong>Status :</strong>&nbsp;
        {status}
      </div>
    </div>
  );
}

export default VideoStream;
