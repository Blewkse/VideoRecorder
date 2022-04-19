import React, { useCallback, useState } from 'react';
import Lightning from './Lightning';

type Props = {
  title: string;
  children: React.ReactNode;
};

const SingleSetting = ({ title, children }: Props) => {
  return (
    <div className="bg-violet-700 rounded-xl flex-col w-full h-full pb-2  group transition duration-100 hover:scale-110 hover:cursor-pointer">
      <div className="flex mx-1/12 ">
        <h1 className="text-xl text-white font-mono font-bold ">{title}</h1>
      </div>
      {children}
    </div>
  );
};

export default SingleSetting;
