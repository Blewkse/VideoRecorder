import { useCallback, useEffect, useState } from 'react';

const useSoundLevel = (stream: MediaStream, audioContext: AudioContext) => {
  const [level, setLevel] = useState('');

  const _setLevel = useCallback(
    (data: number) => {
      console.log(audioContext.state);
      if (audioContext.state === 'suspended') {
        setLevel('Disabled');
      } else if (data === 0 && audioContext.state === 'running') {
        setLevel('No sound');
      } else setLevel('blabla');
    },
    [audioContext.state]
  );

  useEffect(() => {
    (async () => {
      if (!stream) {
        return;
      }
      const source = audioContext.createMediaStreamSource(stream);
      await audioContext.audioWorklet.addModule('/vu-meter.ts');

      const recorder = new AudioWorkletNode(audioContext, 'vumeter');
      const analyser = audioContext.createAnalyser();

      analyser.smoothingTimeConstant = 0.8;
      analyser.fftSize = 256;
      source.connect(analyser);
      source.connect(recorder).connect(audioContext.destination);
      analyser.connect(recorder);

      recorder.port.onmessage = ({ data }) => {
        _setLevel(data);
      };
    })();
  }, [_setLevel, audioContext, stream]);

  return level;
};

export default useSoundLevel;
