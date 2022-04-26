import React, { createContext, useCallback, useMemo, useState } from 'react';

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
  const [videoLinks, setVideoLinks] = useState<Array<string>>([]);

  const addVideo = useCallback(
    (url: string) => {
      setVideoLinks([...videoLinks, url]);
    },
    [videoLinks]
  );
  function removeAll() {
    setVideoLinks([]);
  }

  const value = useMemo(() => ({ videoLinks, addVideo, removeAll }), [videoLinks]);

  return <VideoContext.Provider value={value}>{children}</VideoContext.Provider>;
};

export default VideoContextProvider;
