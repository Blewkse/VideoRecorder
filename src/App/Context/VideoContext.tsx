import React, { createContext, useMemo, useState } from 'react';

export const VideoContext = createContext<any>(null);

const VideoContextProvider = (props: any) => {
  const [videoLinks, setVideoLinks] = useState<Array<string>>(['']);

  const value = useMemo(() => ({ videoLinks, addVideo, removeAll }), [videoLinks]);

  function addVideo(url: string) {
    setVideoLinks([...url]);
  }

  function removeAll() {
    setVideoLinks(['']);
  }

  return <VideoContext.Provider value={value}>{props.children}</VideoContext.Provider>;
};

export default VideoContextProvider;
