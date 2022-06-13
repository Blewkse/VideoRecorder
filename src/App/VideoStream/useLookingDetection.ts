import useImportScript from '../useImportScript';

declare global {
  interface Window {
    webgazer: any;
  }
}

function useLookingDetection() {
  useImportScript('https://webgazer.cs.brown.edu/webgazer.js');
  window.webgazer
    .setGazeListener((data: Array<number>[], timestamp: number) => {
      if (!data) {
        return;
      }

      console.log(data, timestamp);
    })
    .begin();
}

export default useLookingDetection;
