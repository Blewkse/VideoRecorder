import Rushes from './Rushes';
import Setttings from './Settings';
import VideoStream from './VideoStream';

function App() {
  return (
    <div className="flex bg-black h-screen flex-row  ">
      <div className="flex bg-purple-500 flex-col flex-grow ">
        <VideoStream />
        <div>
          <Rushes />
        </div>
      </div>
      <Setttings />
    </div>
  );
}

export default App;
