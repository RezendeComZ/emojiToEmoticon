// Todo:
// Option to put a space between emoticons texts
// Separate spaces and lines
// Separate words from convertion
// Option to exhibit two types of some emoticons
// Emoji keyboard
// Button 'Show side-by-side' comparison

function selectId(id) {
  return document.getElementById(id)  
};

document.getElementById('loading').style.display = 'none';

let divTxt = '';
let divEmoticons = '';
let divUnconverted = '';
const copyCheckbox = selectId('copy');
const app = selectId('app');
const textArea = selectId('emoji');

copyCheckbox.addEventListener('click', () => {
  if (copyCheckbox.checked === true) navigator.clipboard.writeText(divTxt);
});

textArea.addEventListener('keyup', () => {
  if (textArea.value.trim()) {
    convert();
    if (copyCheckbox.checked === true) return navigator.clipboard.writeText(divTxt);
  } else {
    app.style.display = 'none'
  }
})

const convert = () => {
  app.style.display = 'block';
  unconverted.style.display = 'none';
  let inputEmojis = splitter.splitGraphemes(document.getElementById('emoji').value).filter(emoji => emoji != ' ');

  divEmoticons = ''
  divTxt = '';
  divUnconverted = '';

  inputEmojis.forEach(emoji => {
    if (emojiList[emoji] != undefined) {
      divEmoticons += `<img src=${emojiList[emoji].img}>`
      divTxt += " " + emojiList[emoji].txt;
    } else {
      unconverted.style.display = 'block';
      divUnconverted += emoji;
    }
  });
  selectId('resultEmoticon').innerHTML = divEmoticons;
  selectId('resultText').innerText = divTxt;
  selectId('resultUnconverted').innerText = divUnconverted
}

convert();