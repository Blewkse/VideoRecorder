import { useEffect, useState } from 'react';

function useLightning(videoID: HTMLVideoElement, imageCanvas: HTMLCanvasElement) {
  const imageContext = imageCanvas.getContext('2d');
  const [brightnessLevel, setBrightnessLevel] = useState<number>(0);

  init(videoID, imageCanvas);
  useEffect(() => {
    (async () => {
      if (!imageContext) {
        return;
      }
      setBrightnessLevel(await update(imageContext, imageCanvas, videoID));
    })();
  }, [imageCanvas, imageContext, videoID]);

  return brightnessLevel;
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

function init(videoID: HTMLVideoElement, imageCanvas: HTMLCanvasElement) {
  imageCanvas.height = videoID.videoHeight;
  imageCanvas.width = videoID.videoWidth;
}

async function update(
  imageContext: CanvasRenderingContext2D,
  imageCanvas: HTMLCanvasElement,
  videoID: HTMLVideoElement
) {
  let data;
  const alpha = 0;
  imageContext.drawImage(
    videoID,
    0,
    0,
    videoID.videoWidth,
    videoID.videoHeight,
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
  return avgBrightness;
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

export default useLightning;
