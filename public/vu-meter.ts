registerProcessor(
  'vumeter',
  class extends AudioWorkletProcessor {
    _volume = 0;
    _updateIntervalInMS = 0;
    _nextUpdateFrame = 0;

    constructor() {
      super();
      this._volume = 0;
      this._updateIntervalInMS = 25;
      this._nextUpdateFrame = this._updateIntervalInMS;
      this.port.onmessage = (event) => {
        if (event.data.updateIntervalInMS) this._updateIntervalInMS = event.data.updateIntervalInMS;
      };
    }

    get intervalInFrames() {
      return (this._updateIntervalInMS / 100) * sampleRate;
    }

    process(inputs) {
      const input = inputs[0];

      if (input.length > 0) {
        const samples = input[0];
        let sum = 0;

        for (let i = 0; i < samples.length; ++i) {
          sum += samples[i] * samples[i];
        }

        const rms = Math.sqrt(sum / samples.length);
        this._volume = rms;

        this._nextUpdateFrame -= samples.length;
        if (this._nextUpdateFrame < 0) {
          this._nextUpdateFrame += this.intervalInFrames;
          this.port.postMessage(((this._volume / 0.3162) * 1000).toFixed());
        }
      }

      return true;
    }
  }
);
