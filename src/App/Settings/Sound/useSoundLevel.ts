import { useEffect, useRef, useState } from 'react';

const useSoundLevel = (stream: MediaStream) => {
  const recorder = useRef<AudioWorkletNode>();
  const [level, setLevel] = useState(0);

  useEffect(() => {
    (async () => {
      recorder.current = await init(stream);
      recorder.current.port.onmessage = ({ data }) => {
        setLevel(data);
      };
    })();
  }, [stream]);

  return level;
};

export default useSoundLevel;

async function init(stream: MediaStream) {
  const audioContext = new window.AudioContext();
  const source = audioContext.createMediaStreamSource(stream);
  await audioContext.audioWorklet.addModule('/vu-meter.ts');
  const recorder = new AudioWorkletNode(audioContext, 'vumeter');
  const analyser = audioContext.createAnalyser();
  analyser.smoothingTimeConstant = 0.8;
  analyser.fftSize = 256;
  source.connect(analyser);
  source.connect(recorder).connect(audioContext.destination);
  analyser.connect(recorder);
  return recorder;
}
