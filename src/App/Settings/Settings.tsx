import React, { useContext } from 'react';
import { VideoContext } from '../Context/VideoContext';
import BlurActivated from './Blur/BlurActivated';
import BlurDisable from './Blur/BlurDisable';
import Blur from './Blur/BlurDisable';
import Lightning from './Lightning/Lightning';
import SingleSetting from './SingleSetting';
import Sound from './Sound/Sound';
import View from './View/View';

function Settings() {
  const { stream, videoRef, isBlur } = useContext(VideoContext);
  return (
    <div className="flex bg-violet-500 flex-col w-56 md:w-44 sm:w-32 content-start flex-shrink-0">
      <div className="border-b-2">
        <h1 className="font-mono text-3xl text-white font-extrabold pt-2">SETTINGS</h1>
      </div>
      <div className="flex flex-col px-5 mt-7">
        <div className="flex flex-col gap-4 items-center">
          {stream && stream.active && (
            <SingleSetting title="Son">
              <Sound />
            </SingleSetting>
          )}
          <SingleSetting title="Luminosité">
            <Lightning />
          </SingleSetting>

          <SingleSetting title="Regard">
            <View />
          </SingleSetting>

          {videoRef && isBlur && (
            <SingleSetting title="Flou">
              <BlurActivated />
            </SingleSetting>
          )}
          {videoRef && !isBlur && (
            <SingleSetting title="Flou">
              <BlurDisable />
            </SingleSetting>
          )}
        </div>
      </div>
    </div>
  );
}

export default Settings;
