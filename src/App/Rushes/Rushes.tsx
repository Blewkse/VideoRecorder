import React from 'react';
import Rush from './Rush';

function Rushes() {
  return (
    <div className="flex flex-row align-middle">
      <div className="flex bg-purple-500 gap-4 flex-row content-start ">
        <Rush />
        <Rush />
        <Rush />
      </div>
    </div>
  );
}

export default Rushes;
