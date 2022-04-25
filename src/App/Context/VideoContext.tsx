import React, { createContext, useMemo, useState } from 'react';

export const VideoContext = createContext<any>(null);

const VideoContextProvider = (props: any) => {
  const [videoLinks, setVideoLinks] = useState<Array<string>>(['']);

  const value = useMemo(() => ({ videoLinks, setVideoLinks }), [videoLinks, setVideoLinks]);

  function addVideo(url: string) {
    setVideoLinks([...url]);
  }

  function removeAll() {
    setVideoLinks(['']);
  }

  return (
    <VideoContext.Provider value={{ videoLinks, addVideo, removeAll }}>
      {props.children}
    </VideoContext.Provider>
  );
};
