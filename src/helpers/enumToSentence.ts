const enumToSentence = (sentence: string) => {
  const words = sentence.split(/[\s_-]/);
  let result = '';
  words.forEach((w, idx) => {
    if (idx !== 0) result += ' ';
    result += w[0].toUpperCase() + w.slice(1).toLowerCase();
  });
  return result;
};

export default enumToSentence;
