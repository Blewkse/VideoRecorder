import React, { useCallback, useState } from 'react';
import useVideoBlur from './useVideoBlur';
enum RecorderStatus {
  'IDLE' = 'idle',
  'INIT' = 'init',
  'RECORDING' = 'recording',
  'UNREGISTERED' = 'unregistered'
}

type Props = {
  video: HTMLVideoElement;
  status: RecorderStatus;
  onFinishBlurRecord: (blobUrl: Blob | Uint8Array | undefined) => void;
};

function BlurVideo({ video, status, onFinishBlurRecord }: Props) {
  const [imageCanvas, setImageCanvas] = useState<HTMLCanvasElement>();

  const blobUrl = useVideoBlur({
    videoRef: video,
    imageCanvas: imageCanvas,
    status: status
  });

  useCallback(() => {
    onFinishBlurRecord(blobUrl);
  }, [blobUrl, onFinishBlurRecord]);

  return (
    <div className="flex flex-col bg-slate-900 items-center">
      <canvas
        className="flex flex-grow z-30 absolute"
        ref={(elem) => {
          setImageCanvas(elem || undefined);
        }}
      />
    </div>
  );
}

export default BlurVideo;
