import React, { useContext } from 'react';
import { VideoContext } from '../Context/VideoContext';

function Options() {
  const { removeAllRushes } = useContext(VideoContext);

  return (
    <div
      className="bg-white rounded-full  text-xs self-top hover:cursor-pointer"
      onClick={removeAllRushes}>
      Supprimer
    </div>
  );
}

export default Options;
