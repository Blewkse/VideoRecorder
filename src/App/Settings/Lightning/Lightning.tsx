import React, { useContext } from 'react';
import { VideoContext } from '../../Context/VideoContext';
import useLightning from './useLightning';

function Lightning() {
  const { videoRef, imageCanvas } = useContext(VideoContext);

  const value = useLightning(videoRef.current, imageCanvas.current);

  return (
    <div className="flex mx-1/6 align-top ">
      <p className="text-white">{value}%</p>
    </div>
  );
}

export default Lightning;
