import SingleSetting from './SingleSetting';

function Settings() {
  return (
    <div className="flex bg-violet-500 flex-col w-40 content-start flex-shrink-0">
      <div>
        <h1 className="font-mono text-3xl text-white font-extrabold pb-1/5 pt-2">SETTINGS</h1>
      </div>
      <div className="flex flex-col px-5">
        <div className="flex flex-col gap-4 items-center">
          <SingleSetting title="Luminosité" />
          <SingleSetting title="Son" />
          <SingleSetting title="Regard" />
          <SingleSetting title="Flou" />
        </div>
      </div>
    </div>
  );
}

export default Settings;
