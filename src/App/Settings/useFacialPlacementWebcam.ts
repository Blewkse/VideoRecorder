import cocoSsd from '@tensorflow-models/coco-ssd';
import { useCallback, useEffect } from 'react';

function useFacialPlacementWebcam(interval: number, videoRef?: HTMLVideoElement) {
  let model: cocoSsd.ObjectDetection | undefined = undefined;
  cocoSsd.load().then(function (loadedModel) {
    model = loadedModel;
  });

  const update = useCallback(() => {
    if (!videoRef) {
      return;
    }

    model?.detect(videoRef).then(function (prediction) {
      // Now lets loop through predictions and draw them to the live view if
      // they have a high confidence score.
      for (let n = 0; n < prediction.length; n++) {
        // If we are over 66% sure we are sure we classified it right, draw it!
        if (prediction[n].score > 0.3) {
        }
      }
    });
  }, [videoRef]);

  useEffect(() => {
    (async () => {
      setInterval(() => {
        // Load the model.
        update();
      }, interval);
      return () => clearInterval();
    })();
  }, [interval, update, videoRef]);
}

export default useFacialPlacementWebcam;
