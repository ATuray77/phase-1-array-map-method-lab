const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
/*
function titleCased() {
  const everyWord = tutorials.map(() => {
    for(const word of tutorials){
      for (const firstLetter of word)
      return firstLetter[0].toUpperCase() + firstLetter.substring(1);
    }
    return tutorials
  })
  return everyWord
}
*/
const titleCased = () => {
  return tutorials.map((string) => {
    const wordArray = string.split(" ");
    const newWords = wordArray.map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return newWords.join(" ");
  });
};


