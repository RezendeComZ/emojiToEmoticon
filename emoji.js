// Copy button
// Option to put a space between emoticons texts
// Verificar se está rodando no domínio certo

const path = "./emoticons/";

const emoticons = {
  angel: {
    txt: "(a)",
    img: `${path}faces/angel_smile.gif`
  },
  happy: {
    txt: ":)",
    img: `${path}faces/regular_smile.gif`
  },
  teethSmile: {
    txt: ":-D",
    img: `${path}faces/teeth_smile.gif`
  }
}

const listaEmoji = {
  '😇': emoticons.angel,
  '🙂': emoticons.happy,
  '🙃': emoticons.happy,
  '☺️': emoticons.happy,
  '😊': emoticons.happy,
  '🥲 ': emoticons.happy,
  '☺️ ': emoticons.happy,
  '😀': emoticons.teethSmile,
  '😃': emoticons.teethSmile,
  '😄': emoticons.teethSmile,
  '😁': emoticons.teethSmile,
  '😆': emoticons.teethSmile,
  '😅': emoticons.teethSmile,
  '😅': emoticons.teethSmile,
  '😂': emoticons.teethSmile,
  '🤣': emoticons.teethSmile,
  '🥲': emoticons.teethSmile,
}

const mostraConteudo = () => {
  let inputEmojis = splitter.splitGraphemes(document.getElementById('emoji').value)
  let divEmoticons = '';
  let divTxt = '';

  inputEmojis.forEach(emoji => {
    for (let prop in listaEmoji) {
      if (prop == emoji) {
        divEmoticons += `<img src=${listaEmoji[prop].img}>`
        divTxt += " " + listaEmoji[prop].txt; // Test whether space is really needed
      }
    }
    document.getElementById('resultEmoticon').innerHTML = divEmoticons;
    document.getElementById('resultText').innerText = divTxt;
  });
}