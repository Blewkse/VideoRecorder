import React, { useContext } from 'react';
import { VideoContext } from '../Context/VideoContext';

type Props = {
  link: string;
};

function Rush({ link }: Props) {
  return (
    <div className="flex h-36">
      <video src={link} controls />
    </div>
  );
}

export default Rush;
