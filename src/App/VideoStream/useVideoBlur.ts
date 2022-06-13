import { useCallback, useEffect, useRef } from 'react';
import '@tensorflow/tfjs-backend-webgl';
import '@tensorflow/tfjs';
import * as bodyPix from '@tensorflow-models/body-pix';
import Whammy from 'ts-whammy/src/libs';
enum RecorderStatus {
  'IDLE' = 'idle',
  'INIT' = 'init',
  'RECORDING' = 'recording',
  'UNREGISTERED' = 'unregistered'
}

type Props = {
  videoRef: HTMLVideoElement;
  imageCanvas?: HTMLCanvasElement;
  status: RecorderStatus;
};

function useVideoBlur({ videoRef, imageCanvas, status }: Props) {
  const bodyPixRef = useRef<bodyPix.BodyPix>();
  const timer = useRef<NodeJS.Timer>();
  const frames = useRef<Array<string>>(['']);
  const blob = useRef<Blob | undefined | Uint8Array>();

  const initSize = useCallback(
    (canvas: HTMLCanvasElement) => {
      videoRef.width = videoRef.videoWidth;
      videoRef.height = videoRef.videoHeight;
      canvas.height = videoRef.videoHeight;
      canvas.width = videoRef.videoWidth;
    },
    [videoRef]
  );

  const process = useCallback(async () => {
    const segmentation = await bodyPixRef.current?.segmentPerson(videoRef);

    const backgroundBlurAmount = 6;
    const edgeBlurAmount = 2;
    const flipHorizontal = false;
    if (!segmentation) {
      return;
    }

    const IC = imageCanvas as HTMLCanvasElement;
    bodyPix.drawBokehEffect(
      IC,
      videoRef,
      segmentation,
      backgroundBlurAmount,
      edgeBlurAmount,
      flipHorizontal
    );

    if (status === 'recording') {
      frames.current.push(IC?.toDataURL());
      return;
    }
    if (frames.current.length === 1) {
      blob.current = undefined;
      return;
    }

    blob.current = Whammy.fromImageArray(frames.current.splice(1), 24);
    console.log(blob.current);
    frames.current = [''];
  }, [imageCanvas, status, videoRef]);

  useEffect(() => {
    if (!imageCanvas) {
      return;
    }

    (async () => {
      bodyPixRef.current = await bodyPix.load({
        architecture: 'MobileNetV1',
        outputStride: 16,
        multiplier: 0.75,
        quantBytes: 2
      });
      initSize(imageCanvas);
      timer.current = setInterval(() => {
        process();
      }, 50);
    })();

    return () => clearInterval(timer.current);
  }, [videoRef, imageCanvas, initSize, process]);

  return blob.current;
}

export default useVideoBlur;
