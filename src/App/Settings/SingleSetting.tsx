import React, { useCallback, useState } from 'react';

type Props = {
  title: string;
};

const SingleSetting = ({ title }: Props) => {
  const [activate, setActivate] = useState<boolean>(true);
  const [level, setLevel] = useState<number>();

  const handleClick = useCallback(() => {
    activate ? setActivate(false) : setActivate(true);
  }, [activate]);

  return (
    <div className="bg-violet-700 rounded-xl flex-col w-full pb-2">
      <div className="flex mx-1/12 ">
        <h1 className="text-xl text-white font-mono font-bold">{title}</h1>
      </div>
      <div className="flex mx-1/6 align-top ">
        <h3 className="font-mono text-white text-xs">Parameter</h3>
      </div>
      <div className="flex mx-1/12">
        <input className="h-5 w-5" type={'checkbox'}></input>
      </div>
      <div className="flex justify-end mx-1/12">
        <div className="bg-green-500 rounded-full w-5 h-5"></div>
      </div>
    </div>
  );
};

export default SingleSetting;
