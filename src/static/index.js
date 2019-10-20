const text = document.getElementById('text');

const randomWord = list => {
  const index = Math.floor(Math.random() * list.length);
  return list[index];
};

const generatePhrase = () => {
  text.innerText = `This wine has a ${randomWord(ADJECTIVES)} ${randomWord(
    NOUNS
  )}`;
};

generatePhrase();
