import React, { useContext } from 'react';
import { VideoContext } from '../Context/VideoContext';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Rush from './Rush';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Options from './Options';

function Rushes() {
  const { videoLinks } = useContext(VideoContext);

  console.log(videoLinks);
  return (
    <div className="flex bg-slate-800 gap-4 flex-row justify-between flex-shrink-0">
      {videoLinks.length > 0 ? (
        videoLinks?.map((video: string) => (
          <div key={video}>
            <Rush link={video} index={videoLinks.indexOf(video)} />
          </div>
        ))
      ) : (
        <div>Aucun rush </div>
      )}
      <div className="flex h-1/5 ">
        <Options />
      </div>
    </div>
  );
}

export default Rushes;
