import { useCallback, useEffect, useRef, useState } from 'react';
import '@tensorflow/tfjs-backend-webgl';
import '@tensorflow/tfjs';
import * as tf from '@tensorflow/tfjs-core';
import * as bodyPix from '@tensorflow-models/body-pix';
type Props = {
  videoRef?: HTMLVideoElement;
  isBlur: boolean;
  imageCanvas: HTMLCanvasElement | null;
};

function useVideoBlur({ videoRef, isBlur, imageCanvas }: Props) {
  tf.setBackend('cpu');
  const [segmentation, setSegmentation] = useState<bodyPix.SemanticPersonSegmentation>();
  const [net, setNet] = useState<bodyPix.BodyPix>();
  bodyPix
    .load({ architecture: 'MobileNetV1', outputStride: 16, multiplier: 0.75, quantBytes: 2 })
    .then(function (loadedBody) {
      setNet(loadedBody);
    });

  const initSize = useCallback(() => {
    if (!videoRef || !imageCanvas) {
      return;
    }
    videoRef.width = videoRef.videoWidth;
    videoRef.height = videoRef.videoHeight;
    imageCanvas.height = videoRef.videoHeight;
    imageCanvas.width = videoRef.videoWidth;
  }, [imageCanvas, videoRef]);

  useEffect(() => {
    initSize();

    if (!videoRef || !isBlur || !imageCanvas) {
      return;
    }

    setInterval(() => {
      const masking = async () => {
        if (!net) {
          return;
        }
        const segments = await net.segmentPerson(videoRef);
        setSegmentation(segments);
      };

      const editing = async () => {
        const backgroundBlurAmount = 6;
        const edgeBlurAmount = 2;
        const flipHorizontal = true;

        if (!segmentation) {
          return;
        }
        console.log('ping');
        bodyPix.drawBokehEffect(
          imageCanvas,
          videoRef,
          segmentation,
          backgroundBlurAmount,
          edgeBlurAmount,
          flipHorizontal
        );
      };

      masking().catch(console.error);
      editing();
    }, 1000);
  }, [imageCanvas, initSize, isBlur, net, segmentation, videoRef]);
}

export default useVideoBlur;
