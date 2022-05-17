import React, { useContext } from 'react';
import { VideoContext } from '../../Context/VideoContext';
import useLightning from './useLightning';
import useFacialPlacementWebcam from '../useFacialPlacementWebcam';

function Lightning() {
  const { videoRef } = useContext(VideoContext);

  const videoID = videoRef?.current;
  const value = useLightning({ videoRef: videoID, interval: 1000 });

  return (
    <div className="flex mx-1/6 align-top ">
      <p className="text-white">{value}%</p>
    </div>
  );
}

export default Lightning;
