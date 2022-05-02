import React, { createContext, useCallback, useState } from 'react';
import useRecorder from 'react-hook-recorder';

type StopRecordingCallback = (blob: Blob, url: string) => void;

export enum RecorderStatus {
  'IDLE' = 'idle',
  'INIT' = 'init',
  'RECORDING' = 'recording',
  'UNREGISTERED' = 'unregistered'
}

type ContextType = {
  videoLinks: string[];
  addVideo: (url: string) => void;
  removeAllRushes: () => void;
  removeRush: (index: number) => void;
  startRecording: () => void;
  stopRecording: (callback: StopRecordingCallback) => () => void;
  register: (element: HTMLVideoElement) => void;
  status: RecorderStatus;
  stream: MediaStream;
};
type Props = {
  children: React.ReactNode;
};

export const VideoContext = createContext<ContextType>({
  videoLinks: [],
  addVideo: () => {
    null;
  },
  removeAllRushes: () => {
    null;
  },
  removeRush: () => {
    null;
  },
  startRecording: () => {
    null;
  },
  stopRecording: () => {
    return () => {
      return;
    };
  },
  register: () => {
    null;
  },
  status: RecorderStatus.IDLE,
  stream: new MediaStream()
});

const VideoContextProvider = ({ children }: Props) => {
  const [videoLinks, setVideoLinks] = useState<Array<string>>([]);

  const addVideo = useCallback(
    (url: string) => {
      setVideoLinks([...videoLinks, url]);
    },
    [videoLinks]
  );

  function removeAllRushes() {
    setVideoLinks([]);
  }

  function removeRush(index: number) {
    setVideoLinks(
      videoLinks.filter((rush) => {
        if (videoLinks.indexOf(rush) !== index) {
          return rush;
        }
      })
    );
  }

  const { startRecording, stopRecording, register, status, stream } = useRecorder();

  const value = {
    videoLinks,
    addVideo,
    removeAllRushes,
    removeRush,
    startRecording,
    stopRecording,
    register,
    status,
    stream: stream ?? new MediaStream()
  };

  return <VideoContext.Provider value={value}>{children}</VideoContext.Provider>;
};

export default VideoContextProvider;
