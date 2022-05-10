import React, { useContext } from 'react';
import { VideoContext } from '../Context/VideoContext';
import Blur from './Blur/Blur';
import Lightning from './Lightning/Lightning';
import SingleSetting from './SingleSetting';
import Sound from './Sound/Sound';
import View from './View/View';

function Settings() {
  const { stream, videoRef, imageCanvas } = useContext(VideoContext);
  return (
    <div className="flex bg-violet-500 flex-col w-56 md:w-44 sm:w-32 content-start flex-shrink-0">
      <div className="border-b-2">
        <h1 className="font-mono text-3xl text-white font-extrabold pt-2">SETTINGS</h1>
      </div>
      <div className="flex flex-col px-5 mt-7">
        <div className="flex flex-col gap-4 items-center">
          {videoRef?.current && imageCanvas?.current && (
            <SingleSetting title="Luminosité">
              <Lightning />
            </SingleSetting>
          )}
          {stream && stream.active && (
            <SingleSetting title="Son">
              <Sound />
            </SingleSetting>
          )}
          <SingleSetting title="Regard">
            <View />
          </SingleSetting>
          <SingleSetting title="Flou">
            <Blur />
          </SingleSetting>
        </div>
      </div>
    </div>
  );
}

export default Settings;
