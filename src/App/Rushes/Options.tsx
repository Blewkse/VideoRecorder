import React, { useContext } from 'react';
import { VideoContext } from '../Context/VideoContext';

function Options() {
  const { removeAllRushes } = useContext(VideoContext);

  return (
    <div className="bg-slate-500 flex flex-col w-1/12  h-36 justify-between ">
      <div className="bg-white rounded-full w-1/2 text-xs self-center hover:cursor-pointer ">
        Fusionner
      </div>
      <div
        className="bg-white rounded-full w-1/2 text-xs self-center hover:cursor-pointer"
        onClick={removeAllRushes}>
        Supprimer
      </div>
    </div>
  );
}

export default Options;
