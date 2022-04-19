import Rushes from './Rushes';
import Setttings from './Settings';
import VideoStream from './VideoStream';

function App() {
  return (
    <div className="flex bg-black border border-red-500 h-screen flex-row  ">
      <div className="flex bg-gray-800-800 border border-red-500 gap-4 flex-col flex-grow ">
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
