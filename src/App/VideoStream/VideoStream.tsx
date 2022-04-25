import React, { useCallback, useState } from 'react';
import useRecorder from 'react-hook-recorder';
import { VideoContext } from '../Context/VideoContext';

function VideoStream() {
  const { startRecording, stopRecording, register, status } = useRecorder();
  const [url, setUrl] = useState('');
  const onStop = useCallback((blob, blobUrl) => {
    setUrl(blobUrl);
  }, []);
  const { videoLinks, addVideo, removeAll } = userContext(VideoContext);

  const onRead = useCallback(() => {
    console.log(status);
    if (status !== 'init') {
      if (status !== 'recording') {
        console.log('recording');
        startRecording();
      } else {
        console.log('stop');
        stopRecording(onStop);
      }
    }
  }, [status]);

  return (
    <div className="flex flex-row bg-green-500 flex-grow gap-5 justify-center align-middle ">
      {console.log(status)}
      <video className="w-4/7 py-4 " ref={register} autoPlay muted playsInline></video>
      {status !== 'init' && (
        <>
          <button onClick={startRecording} disabled={status === 'recording'}>
            Start Recording
          </button>
          <button
            onClick={() => {
              addVideo(), stopRecording(onStop);
            }}
            disabled={status !== 'recording'}>
            Stop Recording
          </button>
        </>
      )}
      {/*<div
        className="bg-red-500 w-40 h-40 rounded-full hover:cursor-pointer"
        onClick={onRead}></div>*/}
      <div>
        <strong>Status :</strong>&nbsp;
        {status}
      </div>
    </div>
  );
}

export default VideoStream;
function userContext(VideoContext: React.Context<any>): {
  videoLinks: any;
  addVideo: any;
  removeAll: any;
} {
  throw new Error('Function not implemented.');
}
