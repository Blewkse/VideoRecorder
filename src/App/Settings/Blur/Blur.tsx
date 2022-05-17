import React, { useContext } from 'react';
import { VideoContext } from '../../Context/VideoContext';
import useVideoBlur from './useVideoBlur';

function Blur() {
  const { videoRef } = useContext(VideoContext);
  const videoID = videoRef?.current;
  useVideoBlur({ videoRef: videoID, interval: 5000 });

  return (
    <div className="flex justify-end mx-1/12 ">
      <div className="bg-green-500 rounded-full w-5 h-5"></div>
    </div>
  );
}

export default Blur;
