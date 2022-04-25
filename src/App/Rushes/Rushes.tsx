import React, { useContext } from 'react';
import { VideoContext } from '../Context/VideoContext';
import Rush from './Rush';

function Rushes() {
  const videoLinks = useContext(VideoContext);

  return (
    <div className="flex flex-row align-middle">
      <div className="flex bg-purple-500 gap-4 flex-row content-start ">
        {videoLinks.map((video: string) => (
          <div>
            <Rush link={video} />
            <p>{video}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rushes;
