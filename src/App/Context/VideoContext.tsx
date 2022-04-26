import React, { createContext, useCallback, useMemo, useState } from 'react';

type ContextType = {
  videoLinks: string[];
  addVideo: (url: string) => void;
  removeAllRushes: () => void;
  removeRush: (index: number) => void;
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
  }
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

  const value = useMemo(
    () => ({ videoLinks, addVideo, removeAllRushes, removeRush }),
    [videoLinks]
  );

  return <VideoContext.Provider value={value}>{children}</VideoContext.Provider>;
};

export default VideoContextProvider;
