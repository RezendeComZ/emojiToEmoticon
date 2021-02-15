// Todo:
// Option to put a space between emoticons texts
// Separate spaces and lines
// Separate words from convertion
// Option to exhibit two types of some emoticons
// Emoji keyboard
// Button 'Show side-by-side' comparison

document.getElementById('loading').style.display = 'none'

let divTxt = '';
let divEmoticons = '';
let divUnconverted = '';
const copyCheckbox = document.getElementById('copy');

const convert = () => {
  document.getElementById('app').style.display = 'block';
  unconverted.style.display = 'none';
  let inputEmojis = splitter.splitGraphemes(document.getElementById('emoji').value).filter(emoji => emoji != ' ')
  divEmoticons = ''
  divTxt = '';
  divUnconverted = '';

  inputEmojis.forEach(emoji => {
    if (emojiList[emoji] != undefined) {
      divEmoticons += `<img src=${emojiList[emoji].img}>`
      divTxt += " " + emojiList[emoji].txt; // Test whether space is really needed
    } else {
      unconverted.style.display = 'block'
      divUnconverted += emoji
    }
  });
  document.getElementById('resultEmoticon').innerHTML = divEmoticons;
  document.getElementById('resultText').innerText = divTxt;
  document.getElementById('resultUnconverted').innerText = divUnconverted
  if (copyCheckbox.checked === true) {
      navigator.clipboard.writeText(divTxt)
  }
}