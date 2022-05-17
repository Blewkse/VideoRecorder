import VideoContextProvider from './Context/VideoContext';
import Rushes from './Rushes';
import Setttings from './Settings';
import VideoStream from './VideoStream';
import React from 'react';

function App() {
  return (
    <div className="flex bg-black h-screen flex-row  ">
      <VideoContextProvider>
        <div className="flex flex-col flex-grow ">
          <div className="flex flex-grow justify-center">
            <VideoStream />
          </div>
          <Rushes />
        </div>
        <Setttings />
      </VideoContextProvider>
    </div>
  );
}
export default App;
