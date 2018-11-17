export default (str, minLength) => {
  minLength = typeof minLength === "undefined" ? 2 : minLength;
  var wordsDict = {};
  var words = str
    .toLowerCase() // detect different cased words as the same
    .split(/[\s,.;:?!"]/) // split into words
    .filter(word => {
      return word.length >= minLength;
    }); // ignore words that are too short

  // do the actual count
  words.forEach(word => {
    wordsDict[word] =
      (wordsDict.hasOwnProperty(word) ? wordsDict[word] : 0) + 1;
  });
  return wordsDict;
};
