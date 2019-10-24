const text = document.getElementById('text');

const grammar = epures.createGrammar({
  adjective: ADJECTIVES,
  noun: NOUNS,
  mouthfeel: MOUTHFEEL,
  origin: [
    'This wine has #mouthfeel.a# mouthfeel and #adjective.a# bouquet',
    'This wine has #adjective.a# #noun#',
  ],
});
grammar.addModifiers(epures.modifiers.en_US);

const generatePhrase = () => {
  text.innerText = grammar.flatten('#origin#');
};

generatePhrase();
