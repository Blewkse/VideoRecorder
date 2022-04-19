import React, { useCallback, useState } from 'react';
import useRecorder from 'react-hook-recorder';

function VideoStream() {
  const { startRecording, stopRecording, register, status } = useRecorder();
  const [url, setUrl] = useState('');
  const onStop = useCallback((blob, blobUrl) => {
    setUrl(blobUrl);
  }, []);
  function handleStartRecording() {
    console.log(status);
    if (status !== 'recording') {
      startRecording();
      console.log('start');
    } else {
      stopRecording(onStop);
      console.log('stop');
    }
  }
  return (
    <div className="flex flex-row bg-green-500 flex-grow gap-5 justify-center align-middle ">
      <video className="w-4/7 py-4 " ref={register} autoPlay muted playsInline />
      <div
        className=" bg-red-500 w-5 h-5 rounded-full z-50 self-end p-5 mb-8 absolute hover:cursor-pointer "
        onClick={handleStartRecording}></div>
    </div>
  );
}

export default VideoStream;
