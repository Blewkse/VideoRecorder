export default async function useSoundLevel(stream: MediaStream) {
  console.log(stream);
  const audioContext = new AudioContext();
  console.log(audioContext.state);
  const microphone = audioContext.createMediaStreamSource(stream);
  await audioContext.audioWorklet.addModule('https://codepen.io/forgived/pen/PoZQzWP.js');

  const node = new AudioWorkletNode(audioContext, 'vumeter');
  node.port.onmessage = (event) => {
    let _volume = 0;
    const _sensibility = 5;
    if (event.data.volume) _volume = event.data.volume;
    return (_volume * 100) / _sensibility;
  };
  microphone.connect(node).connect(audioContext.destination);
  return 0;
}
