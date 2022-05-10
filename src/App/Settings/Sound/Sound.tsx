import React, { useContext, useRef } from 'react';
import { VideoContext } from '../../Context/VideoContext';
import useSoundLevel from './useSoundLevel';
import useSoundLevelIndicator from './useSoundLevelIndicator';

function Sound() {
  const { stream } = useContext(VideoContext);

  const level = useSoundLevel(stream);
  const levelIndicator = useSoundLevelIndicator(level);

  return (
    <div className="flex mx-1/6 align-to justify-between">
      <h3 className="font-mono text-white text-xs ">Db: {levelIndicator}</h3>
    </div>
  );
}

export default Sound;
