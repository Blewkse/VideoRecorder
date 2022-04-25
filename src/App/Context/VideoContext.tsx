import React, { createContext, useMemo, useState } from 'react';

type ContextType = {
  videoLinks: string[];
  addVideo: (url: string) => void;
  removeAll: () => void;
};
type Props = {
  children: React.ReactNode;
};

export const VideoContext = createContext<ContextType>({
  videoLinks: [],
  addVideo: (url: string) => {},
  removeAll: () => {}
});

const VideoContextProvider = ({ children }: Props) => {
  const [videoLinks, setVideoLinks] = useState<Array<string>>(['']);

  const value = useMemo(() => ({ videoLinks, addVideo, removeAll }), [videoLinks]);

  function addVideo(url: string) {
    setVideoLinks([...url]);
  }

  function removeAll() {
    setVideoLinks(['']);
  }

  return <VideoContext.Provider value={value}>{children}</VideoContext.Provider>;
};

export default VideoContextProvider;
