import React, { useCallback, useContext, useRef, useState } from 'react';
import { VideoContext } from '../../Context/VideoContext';
import useSoundLevel from './useSoundLevel';

function Sound() {
  const { stream } = useContext(VideoContext);
  const audioContext = useRef(new window.AudioContext()).current;
  const level = useSoundLevel(stream, audioContext);
  const [activate, setActivate] = useState<boolean>(false);

  const handleAudio = useCallback(() => {
    console.log(audioContext.state);
    if (audioContext.state === 'running') {
      console.log('je suspend ');
      audioContext.suspend();
      setActivate(false);
    } else {
      console.log('je reprend ');
      audioContext.resume();
      setActivate(true);
    }
  }, [audioContext]);

  return (
    <div className="flex mx-1/6 align-to justify-between" onClick={handleAudio}>
      <h3 className="font-mono text-white text-xs ">Db: {level}</h3>
      {activate ? (
        <div className="bg-green-500 rounded-full w-5 h-5"></div>
      ) : (
        <div className="bg-red-500 rounded-full w-5 h-5"></div>
      )}
    </div>
  );
}

export default Sound;
