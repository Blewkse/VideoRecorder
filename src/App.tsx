import SingleSetting from './components/singleSetting';
import Rush from './components/Rush';

function App() {
  return (

    
    <div className="flex bg-black border border-red-500 h-screen flex-row  ">
      <div className="flex bg-gray-800-800 border border-red-500 gap-4 flex-col flex-grow ">
        <div className="flex bg-green-500 border border-red-500 gap-4 flex-grow-0">
          <video className='w-4/5 ' src="https://file-examples.com/storage/fe3f5fc9646254aafa134d8/2017/04/file_example_MP4_1920_18MG.mp4" autoPlay muted loop />
          </div>
        <div className="flex bg-purple-500 border border-red-500 gap-4 flex-row h-1/5 content-start flex-shrink-0">
          <Rush/>
          <Rush/>
          <Rush/>
        </div>
      </div>
      <div className="flex bg-violet-500 flex-col w-40 content-start flex-shrink-0">
        <div>
        <h1 className='font-mono text-3xl text-white font-extrabold pb-1/5 pt-2'>SETTINGS</h1>
        </div>
        <div className='flex flex-col px-5'>
          <div className='flex flex-col gap-4 items-center'>
            <SingleSetting/>
            <SingleSetting/>
            <SingleSetting/>
          </div>
        </div>
        
        

      </div>
    </div> 
   
  );

}

export default App;
