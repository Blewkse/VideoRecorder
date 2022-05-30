import { useCallback, useEffect } from 'react';
import '@tensorflow/tfjs-backend-webgl';
import '@tensorflow/tfjs';
import * as tf from '@tensorflow/tfjs-core';
import * as bodyPix from '@tensorflow-models/body-pix';
type Props = {
  videoRef?: HTMLVideoElement;
  isBlur: boolean;
  imageCanvas?: HTMLCanvasElement;
};

function useVideoBlur({ videoRef, isBlur, imageCanvas }: Props) {
  const initSize = useCallback(() => {
    if (!videoRef || !imageCanvas) {
      return;
    }
    videoRef.width = videoRef.videoWidth;
    videoRef.height = videoRef.videoHeight;
    imageCanvas.height = videoRef.videoHeight;
    imageCanvas.width = videoRef.videoWidth;
    imageCanvas.style.left = videoRef.style.left;
    // imageCanvas.style.right = videoRef.style.right;
    imageCanvas.style.top = videoRef.style.top;
    // imageCanvas.style.bottom = videoRef.style.bottom;
    // console.log(videoRef.style.left);
    // console.log(imageCanvas.style.left);
  }, [imageCanvas, videoRef]);
  initSize();

  const editing = useCallback(
    async (net: bodyPix.BodyPix) => {
      console.log('avant videoBlur');
      setInterval(async () => {
        if (!videoRef || !isBlur || !imageCanvas) {
          console.log(imageCanvas);
          clearInterval();
          return;
        }
        const segmentation = await net.segmentPerson(videoRef);
        const backgroundBlurAmount = 6;
        const edgeBlurAmount = 2;
        const flipHorizontal = true;
        if (!segmentation) {
          return;
        }
        console.log('ping 2');

        bodyPix.drawBokehEffect(
          imageCanvas,
          videoRef,
          segmentation,
          backgroundBlurAmount,
          edgeBlurAmount,
          flipHorizontal
        );
      }, 100);
    },
    [imageCanvas, isBlur, videoRef]
  );

  const masking = useCallback(async () => {
    if (!videoRef || !isBlur) {
      return;
    }
    bodyPix
      .load({ architecture: 'MobileNetV1', outputStride: 16, multiplier: 0.75, quantBytes: 2 })
      .then((net) => editing(net));
  }, [editing, isBlur, videoRef]);

  useEffect(() => {
    masking().catch(console.error);
    console.log('ping useVideoblur');
    return;
  }, [masking, videoRef, imageCanvas, isBlur]);
}

export default useVideoBlur;
