import Blur from './Blur';
import Lightning from './Lightning';
import SingleSetting from './SingleSetting';
import Sound from './Sound';
import View from './View';
import React from 'react';

function Settings() {
  return (
    <div className="flex bg-violet-500 flex-col w-56 content-start flex-shrink-0">
      <div className="border-b-2">
        <h1 className="font-mono text-3xl text-white font-extrabold pt-2">SETTINGS</h1>
      </div>
      <div className="flex flex-col px-5 mt-7">
        <div className="flex flex-col gap-4 items-center">
          <SingleSetting title="Luminosité">
            <Lightning />
          </SingleSetting>
          <SingleSetting title="Son">
            <Sound />
          </SingleSetting>
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
