const useSoundLevelIndicator = (level: number) => {
  if (level === 0) {
    return 'No Microphone detected';
  } else if (level > 5000) {
    return level.toString() + 'High !';
  } else return level.toString();
};

export default useSoundLevelIndicator;
