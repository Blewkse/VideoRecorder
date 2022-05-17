import { useCallback, useEffect, useRef, useState } from 'react';
import '@tensorflow/tfjs-backend-webgl';
import * as tf from '@tensorflow/tfjs-core';
import * as bodyPix from '@tensorflow-models/body-pix';
type Props = {
  videoRef?: HTMLVideoElement;
  interval: number;
};

function useVideoBlur({ videoRef, interval }: Props) {
  tf.setBackend('cpu');

  const imageCanvas = document.createElement('canvas');

  let net: bodyPix.BodyPix | undefined = undefined;
  bodyPix
    .load({ architecture: 'MobileNetV1', outputStride: 16, multiplier: 0.75, quantBytes: 2 })
    .then(function (loadedBody) {
      net = loadedBody;
      console.log('Bodypix model loaded.');
    });

  const perform = useCallback(async () => {
    if (!net || !videoRef || !imageCanvas) {
      return;
    }

    videoRef.width = videoRef.videoWidth;
    videoRef.height = videoRef.videoHeight;
    imageCanvas.height = videoRef.videoHeight;
    imageCanvas.width = videoRef.videoWidth;

    const segmentation = await net.segmentPerson(videoRef);

    const backgroundBlurAmount = 6;
    const edgeBlurAmount = 2;
    const flipHorizontal = true;

    if (!segmentation) {
      return;
    }

    bodyPix.drawBokehEffect(
      imageCanvas,
      videoRef,
      segmentation,
      backgroundBlurAmount,
      edgeBlurAmount,
      flipHorizontal
    );

    console.log('ping');
  }, [imageCanvas, net, videoRef]);

  useEffect(() => {
    (async () => {
      setInterval(() => {
        perform();
      }, interval);
      return () => clearInterval();
    })();
  }, [interval, perform]);
}

export default useVideoBlur;
