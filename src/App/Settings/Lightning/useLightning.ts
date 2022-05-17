import { useCallback, useEffect, useRef, useState } from 'react';

type Props = {
  videoRef?: HTMLVideoElement;
  interval: number;
};

function useLightning({ videoRef, interval }: Props) {
  const imageCanvas = document.createElement('canvas');

  const imageContext = useRef(imageCanvas.getContext('2d')).current;

  const [brightnessLevel, setBrightnessLevel] = useState<string>('');

  const update = useCallback(() => {
    imageContext &&
      imageCanvas &&
      videoRef &&
      setBrightnessLevel(getBrightness(imageContext, videoRef, imageCanvas).toString());
  }, [imageCanvas, imageContext, videoRef]);

  useEffect(() => {
    (async () => {
      setInterval(() => {
        update();
      }, interval);
      return () => clearInterval();
    })();
  }, [interval, update]);

  return brightnessLevel;
}

function brightness(pixels: ImageData, adjustment: number) {
  const d = pixels.data;
  for (let i = 0; i < d.length; i += 4) {
    d[i] += adjustment;
    d[i + 1] += adjustment;
    d[i + 2] += adjustment;
  }
  return pixels;
}

function average(imgData: ImageData) {
  const d = imgData.data;
  const rgb = { r: 0, g: 0, b: 0 };
  for (let i = 0; i < d.length; i += 4) {
    rgb.r += d[i];
    rgb.g += d[i + 1];
    rgb.b += d[i + 2];
  }

  rgb.r = ~~(rgb.r / (d.length / 4));
  rgb.g = ~~(rgb.g / (d.length / 4));
  rgb.b = ~~(rgb.b / (d.length / 4));

  return rgb;
}
function getBrightness(
  imageContext?: CanvasRenderingContext2D | null | undefined,
  videoRef?: HTMLVideoElement,
  imageCanvas?: HTMLCanvasElement
) {
  if (!imageContext || !videoRef || !imageCanvas) {
    return 0;
  }
  let data;
  const alpha = 0;
  imageContext.drawImage(
    videoRef,
    0,
    0,
    videoRef.videoWidth,
    videoRef.videoHeight,
    0,
    0,
    imageCanvas.width,
    imageCanvas.height
  );
  data = brightness(imageContext.getImageData(0, 0, imageCanvas.width, imageCanvas.height), alpha);
  imageContext.putImageData(data, 0, 0);
  data = average(imageContext.getImageData(0, 0, imageCanvas.width, imageCanvas.height));
  const avgBrightness =
    Math.round(((0.2126 * data.r + 0.7152 * data.g + 0.0722 * data.b) / 255) * 100 * 100) / 100;

  if (!avgBrightness) {
    return 0;
  }

  return avgBrightness;
}

export default useLightning;
