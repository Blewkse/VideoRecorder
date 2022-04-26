import React, { useContext } from 'react';
import { VideoContext } from '../Context/VideoContext';

type Props = {
  link: string;
  index: number;
};

function Rush({ link, index }: Props) {
  const { removeRush } = useContext(VideoContext);
  return (
    <div className="flex relative h-36 flex-grow flex-row bg-white">
      <video src={link} controls />
      <div className="flex justify-center absolute -right-2 -top-2">
        <div
          className="rounded-full bg-red-600 z-50 w-6 h-6  hover:cursor-pointer"
          onClick={() => {
            removeRush(index);
          }}>
          {index}
        </div>
      </div>
    </div>
  );
}

export default Rush;
