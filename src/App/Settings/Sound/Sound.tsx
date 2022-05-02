import React, { useContext } from 'react';
import { VideoContext } from '../../Context/VideoContext';
import useSoundLevel from './useSoundLevel';

function Sound() {
  const { stream } = useContext(VideoContext);
  let level;
  const onClick = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    level = useSoundLevel(stream);
  };
  return (
    <div className="flex mx-1/6 align-top ">
      <h3 className="font-mono text-white text-xs">{level}</h3>
      <button onClick={onClick}>handle</button>
    </div>
  );
}

export default Sound;
