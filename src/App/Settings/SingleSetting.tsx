import React, { useCallback, useState } from 'react';

type Props = {
  title: string;
};

const SingleSetting = ({ title }: Props) => {
  const [activate, setActivate] = useState<boolean>(false);
  const [param, setParam] = useState<boolean>(false);

  const [level, setLevel] = useState<number>();

  const handleClick = useCallback(() => {
    activate ? setActivate(false) : setActivate(true);
  }, [activate]);

  function typeSelector() {
    switch (title) {
      case 'Luminosité':
        setParam(true);
        break;
      case 'Son':
        setParam(true);
        break;
      case 'Regard':
        setParam(false);
        break;
      case 'Flou':
        setParam(false);
        break;

      default:
        break;
    }
  }

  return (
    <div
      className="bg-violet-700 rounded-xl flex-col w-full h-full pb-2  group transition duration-100 hover:scale-110"
      onClick={handleClick}>
      {typeSelector}
      <div className="flex mx-1/12 ">
        <h1 className="text-xl text-white font-mono font-bold ">{title}</h1>
      </div>
      <div className="flex mx-1/6 align-top ">
        <h3 className="font-mono text-white text-xs">Parameter</h3>
      </div>
      <div className="flex justify-end mx-1/12">
        {activate ? (
          <div className="bg-green-500 rounded-full w-5 h-5"></div>
        ) : (
          <div className="bg-red-500 rounded-full w-5 h-5"></div>
        )}
      </div>
    </div>
  );
};

export default SingleSetting;
