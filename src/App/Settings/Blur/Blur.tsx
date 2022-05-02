import React, { useCallback, useState } from 'react';

function Blur() {
  const [activate, setActivate] = useState<boolean>(false);

  const handleClick = useCallback(() => {
    activate ? setActivate(false) : setActivate(true);
  }, [activate]);

  return (
    <div className="flex justify-end mx-1/12 " onClick={handleClick}>
      {activate ? (
        <div className="bg-green-500 rounded-full w-5 h-5"></div>
      ) : (
        <div className="bg-red-500 rounded-full w-5 h-5"></div>
      )}
    </div>
  );
}

export default Blur;
