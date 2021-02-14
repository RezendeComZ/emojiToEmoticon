// Copy button
// Option to put a space between emoticons texts
// Separate spaces and lines
// Separate words from convertion
// Show unconverted
// Emoji keyboard

document.getElementById('loading').style.display = 'none'

const path = "./emoticons/";

const emoticons = {
  angel: {
    txt: "(A)",
    img: `${path}faces/angel_smile.gif`
  },
  happy: {
    txt: ":)",
    img: `${path}faces/regular_smile.gif`
  },
  teethSmile: {
    txt: ":-D",
    img: `${path}faces/teeth_smile.gif`
  },
  wink: {
    txt: ';)',
    img: `${path}faces/wink_smile.gif`
  },
  heart: {
    txt: '(L)',
    img: `${path}love-reaction/heart.gif`
  },
  kiss: {
    txt: '(K)',
    img: `${path}love-reaction/kiss.gif`
  },
  tongue: {
    txt: ':-P',
    img: `${path}faces/tongue_smile.gif`
  },
  confused: {
    txt: '^o)',
    img: `${path}faces/confused.gif`
  },
  nerd: {
    txt: '8-|',
    img: `${path}faces/glasses_happy.gif`
  },
  hot: {
    txt: '(H)',
    img: `${path}faces/shades_smile.gif`
  },
  faceStar: {
    txt: '(*)', // ( (*) (*) )
    img: `${path}nature/star.gif`
  },
  birthday: {
    txt: '(^)',
    img: `${path}food-drink/cake.gif`
  },
  sad: {
    txt: ':-(',
    img: `${path}faces/sad_smile.gif`
  },
  cry: {
    txt: ":'(",
    img: `${path}faces/cry_smile.gif`
  },
  angry: {
    txt: '8o',
    img: `${path}faces/angry.gif`
  },
  angryRed: {
    txt: ':-@',
    img: `${path}faces/angry_smile.gif`
  },
  confused: {
    txt: ':-S',
    img: `${path}faces/confused_smile.gif`
  }
}

const emojiList = {
  '😇': emoticons.angel,
  '🙂': emoticons.happy,
  '🙃': emoticons.happy,
  '☺️': emoticons.happy,
  '😊': emoticons.happy,
  '🥲': emoticons.happy,
  '☺️': emoticons.happy,
  '😌': emoticons.happy,
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
  '😉': emoticons.wink,
  '😏': emoticons.wink,
  '😍': emoticons.heart,
  '🥰': emoticons.heart,
  '😘': emoticons.kiss,
  '😗': emoticons.kiss,
  '😙': emoticons.kiss,
  '😚': emoticons.kiss,
  '😚': emoticons.kiss,
  '😋': emoticons.tongue,
  '😛': emoticons.tongue,
  '😝': emoticons.tongue,
  '😝': emoticons.tongue,
  '😜': emoticons.tongue,
  '😜': emoticons.tongue,
  '🤪': emoticons.tongue,
  '🤨': emoticons.confused,
  '🧐': emoticons.confused,
  '🤓': emoticons.nerd,
  '🥸': emoticons.nerd,
  '😎': emoticons.hot,
  '🤩': emoticons.faceStar,
  '🥳': emoticons.birthday,
  '😒': emoticons.sad,
  '😞': emoticons.sad,
  '😔': emoticons.sad,
  '😟': emoticons.sad,
  '😕': emoticons.sad,
  '🙁': emoticons.sad,
  '☹️': emoticons.sad,
  '😣': emoticons.sad,
  '😣': emoticons.sad,
  '😖': emoticons.sad,
  '😫': emoticons.cry,
  '😩': emoticons.cry,
  '🥺': emoticons.cry,
  '😢': emoticons.cry,
  '😭': emoticons.cry,
  '😤': emoticons.angry,
  '😤': emoticons.angry,
  '😠': emoticons.angry,
  '😠': emoticons.angry,
  '😡': emoticons.angryRed,
  '🤬': emoticons.angryRed,
  '🤯': emoticons.confused,
}
let divTxt = '';
let divEmoticons = '';

const convert = () => {
  document.getElementById('app').style.display = 'block';
  let inputEmojis = splitter.splitGraphemes(document.getElementById('emoji').value)
  divEmoticons = ''
  divTxt = '';

  inputEmojis.forEach(emoji => {
    if (emojiList[emoji] != undefined) {
      divEmoticons += `<img src=${emojiList[emoji].img}>`
      divTxt += " " + emojiList[emoji].txt; // Test whether space is really needed
    } else if (emojiList[emoji] == ' ') {
      console.log('Espaço detectado')
    } else {
      console.log(emoji + ' is not in the list or contains space')
    }
  });
  document.getElementById('resultEmoticon').innerHTML = divEmoticons;
  document.getElementById('resultText').innerText = divTxt;
  navigator.clipboard.writeText(divTxt)
}