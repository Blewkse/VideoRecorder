import React, { useContext } from 'react';
import { VideoContext } from '../../Context/VideoContext';
import useSoundLevel from './useSoundLevel';

function Sound() {
  const { stream } = useContext(VideoContext);
  const level = useSoundLevel(stream);

  return (
    <div className="flex mx-1/6 align-to justify-between">
      <h3 className="font-mono text-white text-xs ">Db: {level}</h3>
    </div>
  );
}

export default Sound;
