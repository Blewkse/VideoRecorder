import React from 'react';
import useLightning from './useLightning';

function Lightning() {
  const value = useLightning();

  return (
    <div className="flex mx-1/6 align-top ">
      <p className="text-white">{value}%</p>
    </div>
  );
}

export default Lightning;
