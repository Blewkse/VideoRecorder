import React, { useContext } from 'react';
import { VideoContext } from '../Context/VideoContext';
import Rush from './Rush';

function Rushes() {
  const { videoLinks } = useContext(VideoContext);
  const VideoLinksFree = () => {
    for (let i = 0; i < videoLinks.length; i++) {
      if (videoLinks[i] === '') {
        videoLinks.splice(i, 1);
      }
    }
  };
  console.log(videoLinks);
  return (
    <div className="flex flex-row align-middle">
      <div className="flex bg-purple-500 gap-4 flex-row content-start align-middle ">
        {}
        {videoLinks.length > 0 ? (
          videoLinks?.map((video: string) => (
            <div key={video}>
              <Rush link={video} />
            </div>
          ))
        ) : (
          <div>Aucun rush </div>
        )}
      </div>
    </div>
  );
}

export default Rushes;
