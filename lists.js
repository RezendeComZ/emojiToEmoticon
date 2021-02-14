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
  },
  embarrassed: {
    txt: ':-$',
    img: `${path}faces/red_smile.gif`
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
  '😳': emoticons.embarrassed,
}

// Reference

let emojiArray = Object.entries(emojiList)
let emoticonArray = Object.entries(emoticons)

// Emoji: emoticon
let emojiToEmoticon = [];
for (let i = 0; i < emojiArray.length; i++){
  emojiToEmoticon[i] = emojiArray[i][0] + ': ';
  for (let j = 0; j < emoticonArray.length; j++) {
      if (emojiArray[i][1].txt === emoticonArray[j][1].txt) {
        emojiToEmoticon[i] += emoticonArray[j][1].txt
      }
  }
}
// console.log(emojiToEmoticon)

// Emoticon: emoji

let emoticonToEmoji = [];
let tableEmoticon = document.getElementById('tableEmoticon');

for (let i = 0; i < emoticonArray.length; i++) {
  emoticonToEmoji[i] = ''
  for (let j = 0; j < emojiArray.length; j++) {
    if (emoticonArray[i][1].txt == emojiArray[j][1].txt) {
      emoticonToEmoji[i] += emojiArray[j][0]
    }
  }
  tableEmoticon.innerHTML += `<div class="row"><div class="col"><img src=${emoticonArray[i][1].img}></div><div class="col-11">${emoticonToEmoji[i]}</div></div>`;
}