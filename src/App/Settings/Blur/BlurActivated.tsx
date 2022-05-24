import React, { useCallback, useContext } from 'react';
import { VideoContext } from '../../Context/VideoContext';

function BlurActivated() {
  const { setIsBlur, isBlur } = useContext(VideoContext);

  const handleClick = useCallback(() => {
    if (!setIsBlur) {
      return;
    }
    setIsBlur(!isBlur);
  }, [isBlur, setIsBlur]);

  return (
    <div className="flex justify-end mx-1/12 " onClick={handleClick}>
      {isBlur ? (
        <div className="bg-green-500 rounded-full w-5 h-5"></div>
      ) : (
        <div className="bg-red-500 rounded-full w-5 h-5"></div>
      )}
    </div>
  );
}

export default BlurActivated;
