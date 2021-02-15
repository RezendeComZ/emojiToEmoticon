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
  brokenHeart: {
    txt: '(U)',
    img: `${path}love-reaction/broken_heart.gif`
  },
  kiss: {
    txt: '(K)',
    img: `${path}love-reaction/kiss.gif`
  },
  money: {
    txt: '(mo)',
    img: `${path}money.gif`
  },
  messenger: {
    txt: '(M)',
    img: `${path}messenger.gif`
  },
  tongue: {
    txt: ':-P',
    img: `${path}faces/tongue_smile.gif`
  },
  confused: {
    txt: '^o)',
    img: `${path}faces/confused.gif`
  },
  idk: {
    txt: ':^)',
    img: `${path}faces/idk.gif`
  },
  nerd: {
    txt: '8-|',
    img: `${path}faces/glasses_happy.gif`
  },
  hot: {
    txt: '(H)',
    img: `${path}faces/shades_smile.gif`
  },
  star: {
    txt: '(*)', // ( (*) (*) )
    img: `${path}nature/star.gif`
  },
  cake: {
    txt: '(^)',
    img: `${path}food-drink/cake.gif`
  },
  beer: {
    txt: '(B)',
    img: `${path}food-drink/beer_mug.gif`
  },
  drink: {
    txt: '(D)',
    img: `${path}food-drink/martini.gif`
  },
  plate: {
    txt: '(pl)',
    img: `${path}food-drink/plate.gif`
  },
  bowl: {
    txt: '(||)',
    img: `${path}food-drink/bowl.gif`
  },
  coffee: {
    txt: '(C)',
    img: `${path}food-drink/coffee.gif`
  },
  pizza: {
    txt: '(pi)',
    img: `${path}food-drink/pizza.gif`
  },
  rose: {
    txt: '(F)',
    img: `${path}love-reaction/rose.gif`
  },
  roseWilted: {
    txt: '(W)',
    img: `${path}love-reaction/wilted_rose.gif`
  },
  party: {
    txt: '<:o)',
    img: `${path}faces/party.gif`
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
  eyeRolling: {
    txt: '8-)',
    img: `${path}faces/eye-rolling.gif`
  },
  gossip: {
    txt: ':-*',
    img: `${path}faces/gossip.gif`
  },
  embarrassed: {
    txt: ':-$',
    img: `${path}faces/red_smile.gif`
  },
  surprised: {
    txt: ':-O',
    img: `${path}faces/omg_smile.gif`
  },
  hug: {
    txt: '({)',
    img: `${path}faces/guy_hug.gif`
  },
  girlHug: {
    txt: '(})',
    img: `${path}faces/girl_hug.gif`
  },
  thinking: {
    txt: '*-)',
    img: `${path}faces/thinking.gif`
  },
  dontTell: {
    txt: ':-#',
    img: `${path}faces/shutup.gif`
  },
  what: {
    txt: ':-|',
    img: `${path}faces/what_smile.gif`
  },
  sleepy: {
    txt: '|-)',
    img: `${path}faces/Sleepy.gif`
  },
  sick: {
    txt: '+o(',
    img: `${path}faces/sick.gif`
  },
  devil: {
    txt: '(6)',
    img: `${path}faces/devil_smile.gif`
  },
  boy: {
    txt: '(Z)',
    img: `${path}faces/guy.gif`
  },
  girl: {
    txt: '(X)',
    img: `${path}faces/girl.gif`
  },
  thumbsUp: {
    txt: '(Y)',
    img: `${path}love-reaction/thumbs_up.gif`
  },
  thumbsDown: {
    txt: '(N)',
    img: `${path}love-reaction/thumbs_down.gif`
  },
  bat: {
    txt: ':-[',
    img: `${path}animals/bat.gif`
  },
  cat: {
    txt: '(@)',
    img: `${path}animals/cat.gif`
  },
  dog: {
    txt: '(&)',
    img: `${path}animals/dog.gif`
  },
  escargot: {
    txt: '(sn)',
    img: `${path}animals/escargot.gif`
  },
  sheep: {
    txt: '(bah)',
    img: `${path}animals/sheep.gif`
  },
  camera: {
    txt: '(P)',
    img: `${path}eletronic/camera.gif`
  },
  movie: {
    txt: '(~)',
    img: `${path}eletronic/film.gif`
  },
  clock: {
    txt: '(O)',
    img: `${path}eletronic/clock.gif`
  },
  computer: {
    txt: '(co)',
    img: `${path}eletronic/computer.gif`
  },
  light: {
    txt: '(I)',
    img: `${path}eletronic/lightbulb.gif`
  },
  mobile: {
    txt: '(mp)',
    img: `${path}eletronic/mobile.gif`
  },
  phone: {
    txt: '(T)',
    img: `${path}eletronic/phone.gif`
  },
  envelope: {
    txt: '(E)',
    img: `${path}envelope.gif`
  },
  island: {
    txt: '(ip)',
    img: `${path}nature/island.gif`
  },
  lightning: {
    txt: '(li)',
    img: `${path}nature/Lightning.gif`
  },
  rain: {
    txt: '(st)',
    img: `${path}nature/rain.gif`
  },
  moon: {
    txt: '(S)',
    img: `${path}nature/moon.gif`
  },
  umbrella: {
    txt: '(um)',
    img: `${path}umbrella.gif`
  },
  music: {
    txt: '(8)',
    img: `${path}note.gif`
  },
  present: {
    txt: '(G)',
    img: `${path}present.gif`
  },
  ball: {
    txt: '(so)',
    img: `${path}sports/ball.gif`
  },
  airplane: {
    txt: '(ap)',
    img: `${path}transport/airplane.gif`
  },
  car: {
    txt: '(au)',
    img: `${path}transport/car.gif`
  },
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
  '🤠': emoticons.teethSmile,
  '🤡': emoticons.teethSmile,
  '😺': emoticons.teethSmile,
  '😸': emoticons.teethSmile,
  '😹': emoticons.teethSmile,
  '😉': emoticons.wink,
  '😏': emoticons.wink,
  '😼': emoticons.wink,
  '😍': emoticons.heart,
  '😻': emoticons.heart,
  '♥️': emoticons.heart,
  '❤️': emoticons.heart,
  '🧡': emoticons.heart,
  '💛': emoticons.heart,
  '💚': emoticons.heart,
  '💙': emoticons.heart,
  '💜': emoticons.heart,
  '🖤': emoticons.heart,
  '🤍': emoticons.heart,
  '🤍': emoticons.heart,
  '🤎': emoticons.heart,
  '🥰': emoticons.heart,
  '❣️': emoticons.heart,
  '💕': emoticons.heart,
  '💞': emoticons.heart,
  '💓': emoticons.heart,
  '💗': emoticons.heart,
  '💖': emoticons.heart,
  '💘': emoticons.heart,
  '💝': emoticons.heart,
  '💟 ': emoticons.heart,
  '💌': emoticons.heart,
  '♡': emoticons.heart,
  '💔 ': emoticons.brokenHeart,
  '😘': emoticons.kiss,
  '😗': emoticons.kiss,
  '😙': emoticons.kiss,
  '😚': emoticons.kiss,
  '😚': emoticons.kiss,
  '😽': emoticons.kiss,
  '👄': emoticons.kiss,
  '💋': emoticons.kiss,
  '😋': emoticons.tongue,
  '😛': emoticons.tongue,
  '😝': emoticons.tongue,
  '😝': emoticons.tongue,
  '😜': emoticons.tongue,
  '😜': emoticons.tongue,
  '🤪': emoticons.tongue,
  '👅': emoticons.tongue,
  '🤨': emoticons.idk,
  '🧐': emoticons.idk,
  '🤷‍♀️': emoticons.confused,
  '🤷‍♂️': emoticons.confused,
  '🙄': emoticons.eyeRolling,
  '🤓': emoticons.nerd,
  '🥸': emoticons.nerd,
  '😎': emoticons.hot,
  '🤩': emoticons.star,
  '🌠': emoticons.star,
  '💫': emoticons.star,
  '⭐️': emoticons.star,
  '🌟': emoticons.star,
  '✨': emoticons.star,
  '✴️': emoticons.star,
  '🔯': emoticons.star,
  '✡️': emoticons.star,
  '✳️': emoticons.star,
  '❇️': emoticons.star,
  '❇️': emoticons.star,
  '✦': emoticons.star,
  '✧': emoticons.star,
  '★': emoticons.star,
  '☆': emoticons.star,
  '✯': emoticons.star,
  '✡︎': emoticons.star,
  '✩': emoticons.star,
  '✪': emoticons.star,
  '✫': emoticons.star,
  '✬': emoticons.star,
  '✭': emoticons.star,
  '✮': emoticons.star,
  '✶': emoticons.star,
  '✷': emoticons.star,
  '✵': emoticons.star,
  '⚡️': emoticons.lightning,
  '⛈': emoticons.lightning,
  '🌩': emoticons.lightning,
  '🌨': emoticons.rain,
  '🌧': emoticons.rain,
  '💦': emoticons.rain,
  '💧': emoticons.rain,
  '🌦': emoticons.rain,
  '☁️': emoticons.rain,
  '🌥': emoticons.rain,
  '⛅️': emoticons.rain,
  '🌤': emoticons.rain,
  '🌙': emoticons.moon,
  '🌜': emoticons.moon,
  '🌛': emoticons.moon,
  '🌝': emoticons.moon,
  '🌚': emoticons.moon,
  '🌕': emoticons.moon,
  '🌖': emoticons.moon,
  '🌗': emoticons.moon,
  '🌘': emoticons.moon,
  '🌑': emoticons.moon,
  '🌒': emoticons.moon,
  '🌓': emoticons.moon,
  '🌔': emoticons.moon,
  '🌃': emoticons.moon,
  '☪️': emoticons.moon,
  '☂️': emoticons.umbrella,
  '☔️': emoticons.umbrella,
  '🥧': emoticons.cake,
  '🧁': emoticons.cake,
  '🍰': emoticons.cake,
  '🎂': emoticons.cake,
  '🍮': emoticons.cake,
  '🍺': emoticons.beer,
  '🍻': emoticons.beer,
  '🥂': emoticons.beer,
  '🍷': emoticons.beer,
  '🥃': emoticons.beer,
  '🍸': emoticons.drink,
  '🍹': emoticons.drink,
  '🧉': emoticons.drink,
  '🍾': emoticons.drink,
  '🥄': emoticons.plate,
  '🍴': emoticons.plate,
  '🍽': emoticons.plate,
  '🥡': emoticons.plate,
  '🥢': emoticons.plate,
  '🥣': emoticons.bowl,
  '🍵': emoticons.bowl,
  '🫖': emoticons.coffee,
  '☕️': emoticons.coffee,
  '🥤': emoticons.coffee,
  '🧋': emoticons.coffee,
  '🍶': emoticons.coffee,
  '🍕': emoticons.pizza,
  '💐': emoticons.rose,
  '🌷': emoticons.rose,
  '🌹': emoticons.rose,
  '🌺': emoticons.rose,
  '🌸': emoticons.rose,
  '🌼': emoticons.rose,
  '🌻': emoticons.rose,
  '🥀': emoticons.roseWilted,
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
  '🥵': emoticons.sad,
  '🥶': emoticons.sad,
  '😫': emoticons.cry,
  '😩': emoticons.cry,
  '🥺': emoticons.cry,
  '😢': emoticons.cry,
  '😭': emoticons.cry,
  '😥': emoticons.cry,
  '😥': emoticons.cry,
  '😓': emoticons.cry,
  '😿': emoticons.cry,
  '😤': emoticons.angry,
  '😤': emoticons.angry,
  '😠': emoticons.angry,
  '😬': emoticons.angry,
  '😾': emoticons.angry,
  '😡': emoticons.angryRed,
  '🤬': emoticons.angryRed,
  '👿': emoticons.angryRed,
  '👺': emoticons.angryRed,
  '🤯': emoticons.confused,
  '😳': emoticons.embarrassed,
  '😱': emoticons.surprised,
  '😨': emoticons.surprised,
  '😰': emoticons.surprised,
  '🤭': emoticons.surprised,
  '😯': emoticons.surprised,
  '😦': emoticons.surprised,
  '😦': emoticons.surprised,
  '😧': emoticons.surprised,
  '😮': emoticons.surprised,
  '😲': emoticons.surprised,
  '😵': emoticons.surprised,
  '🙀': emoticons.surprised,
  '🤗': emoticons.hug,
  '🫂': emoticons.girlHug,
  '🤝': emoticons.girlHug,
  '🤔': emoticons.thinking,
  '🤫': emoticons.dontTell,
  '🤐': emoticons.dontTell,
  '😶': emoticons.what,
  '😐': emoticons.what,
  '😑': emoticons.what,
  '🤦‍♀️': emoticons.what,
  '🤦': emoticons.what,
  '🥱': emoticons.sleepy,
  '😴': emoticons.sleepy,
  '🤤': emoticons.sleepy,
  '😪': emoticons.sleepy,
  '💤': emoticons.sleepy,
  '🥴': emoticons.sick,
  '🤢': emoticons.sick,
  '🤮': emoticons.sick,
  '🤧': emoticons.sick,
  '😷': emoticons.sick,
  '🤒': emoticons.sick,
  '🤕': emoticons.sick,
  '😈': emoticons.devil,
  '👹': emoticons.devil,
  '🗣': emoticons.gossip,
  '🫂': emoticons.gossip,
  '🚹': emoticons.boy,
  '💁‍♂️': emoticons.boy,
  '🙅‍♂️': emoticons.boy,
  '🙆‍♂️': emoticons.boy,
  '🙋‍♂️': emoticons.boy,
  '♂️': emoticons.boy,
  '🚶': emoticons.boy,
  '🏃': emoticons.boy,
  '🙎‍♂️': emoticons.boy,
  '🙍‍♂️': emoticons.boy,
  '👨‍': emoticons.boy,
  '🚺': emoticons.girl,
  '💁‍♀️': emoticons.girl,
  '🙅‍♀️': emoticons.girl,
  '🙆‍♀️': emoticons.girl,
  '🙋‍♀️': emoticons.girl,
  '🙎‍♀️': emoticons.girl,
  '🙍‍♀️': emoticons.girl,
  '👩‍': emoticons.girl,
  '🚶‍♀️': emoticons.girl,
  '🏃‍♀️': emoticons.girl,
  '♀️': emoticons.girl,
  '🥳': emoticons.party,
  '🪅': emoticons.party,
  '🎊': emoticons.party,
  '🎉': emoticons.party,
  '✌️': emoticons.thumbsUp,
  '🤞': emoticons.thumbsUp,
  '🤟': emoticons.thumbsUp,
  '🤘': emoticons.thumbsUp,
  '🤙': emoticons.thumbsUp,
  '👍': emoticons.thumbsUp,
  '🆗': emoticons.thumbsUp,
  '✅': emoticons.thumbsUp,
  '👎': emoticons.thumbsDown,
  '🦇': emoticons.bat,
  '🧛': emoticons.bat,
  '🐱': emoticons.cat,
  '🐈': emoticons.cat,
  '🐈‍⬛': emoticons.cat,
  '🐶': emoticons.dog,
  '🐕': emoticons.dog,
  '🐩': emoticons.dog,
  '🦮': emoticons.dog,
  '🐕‍': emoticons.dog,
  '': emoticons.dog,
  '🐌': emoticons.escargot,
  '🐚': emoticons.escargot,
  '🐑': emoticons.sheep,
  '🐏': emoticons.sheep,
  '📷': emoticons.camera,
  '📸': emoticons.camera,
  '📹': emoticons.movie,
  '🎥': emoticons.movie,
  '📽': emoticons.movie,
  '🎞': emoticons.movie,
  '📼': emoticons.movie,
  '📺': emoticons.movie,
  '🎬': emoticons.movie,
  '🎦': emoticons.movie,
  '⏱': emoticons.clock,
  '⏲ ': emoticons.clock,
  '⏰': emoticons.clock,
  '🕰': emoticons.clock,
  '⌛️': emoticons.clock,
  '⏳': emoticons.clock,
  '🕐': emoticons.clock,
  '🕑': emoticons.clock,
  '🕒': emoticons.clock,
  '🕓': emoticons.clock,
  '🕔': emoticons.clock,
  '🕕': emoticons.clock,
  '🕖': emoticons.clock,
  '🕗': emoticons.clock,
  '🕘': emoticons.clock,
  '🕙': emoticons.clock,
  '🕚': emoticons.clock,
  '🕛': emoticons.clock,
  '🕜': emoticons.clock,
  '🕝': emoticons.clock,
  '🕞': emoticons.clock,
  '🕟': emoticons.clock,
  '🕠': emoticons.clock,
  '🕡': emoticons.clock,
  '🕢': emoticons.clock,
  '🕣': emoticons.clock,
  '🕤': emoticons.clock,
  '🕥': emoticons.clock,
  '🕦': emoticons.clock,
  '🕧': emoticons.clock,
  '💻': emoticons.computer,
  '⌨️': emoticons.computer,
  '🖥': emoticons.computer,
  '👩🏻‍💻': emoticons.computer,
  '👨🏻‍💻': emoticons.computer,
  '👩🏼‍💻': emoticons.computer,
  '👨🏼‍💻': emoticons.computer,
  '👩🏽‍💻': emoticons.computer,
  '👨🏽‍💻': emoticons.computer,
  '👩🏾‍💻': emoticons.computer,
  '👨🏾‍💻': emoticons.computer,
  '👩🏿‍💻': emoticons.computer,
  '👨🏿‍💻': emoticons.computer,
  '💡': emoticons.light,
  '🔦': emoticons.light,
  '🕯': emoticons.light,
  '🪔': emoticons.light,
  '📱': emoticons.mobile,
  '📲': emoticons.mobile,
  '📟': emoticons.mobile,
  '📵': emoticons.mobile,
  '📴': emoticons.mobile,
  '📳': emoticons.mobile,
  '📞': emoticons.phone,
  '☎️': emoticons.phone,
  '📠': emoticons.phone,
  '🧧': emoticons.envelope,
  '✉️': emoticons.envelope,
  '📩': emoticons.envelope,
  '📨': emoticons.envelope,
  '📧': emoticons.envelope,
  '📥': emoticons.envelope,
  '📤': emoticons.envelope,
  '📦': emoticons.envelope,
  '📪': emoticons.envelope,
  '📪': emoticons.envelope,
  '📫': emoticons.envelope,
  '📬': emoticons.envelope,
  '📭': emoticons.envelope,
  '🪙': emoticons.money,
  '💲': emoticons.money,
  '🤑': emoticons.money,
  '🏦': emoticons.money,
  '💸': emoticons.money,
  '💵': emoticons.money,
  '💴': emoticons.money,
  '💶': emoticons.money,
  '💷': emoticons.money,
  '💰': emoticons.money,
  '💳': emoticons.money,
  '🏧': emoticons.money,
  '👬': emoticons.messenger,
  '👫': emoticons.messenger,
  '👥': emoticons.messenger,
  '🚻': emoticons.messenger,
  '🫂': emoticons.messenger,
  '👩‍❤️‍👩': emoticons.messenger,
  '💑': emoticons.messenger,
  '👨‍❤️‍👨': emoticons.messenger,
  '👩‍❤️‍👨': emoticons.messenger,
  '👩‍❤️‍💋‍👩': emoticons.messenger,
  '💏': emoticons.messenger,
  '👨‍❤️‍💋‍👨': emoticons.messenger,
  '👩‍❤️‍💋‍👨': emoticons.messenger,
  '🏝': emoticons.island,
  '⛱': emoticons.island,
  '🏖': emoticons.island,
  '🌊': emoticons.island,
  '🎼': emoticons.music,
  '🎤': emoticons.music,
  '🎧': emoticons.music,
  '🎹': emoticons.music,
  '🥁': emoticons.music,
  '🪘': emoticons.music,
  '🎷': emoticons.music,
  '🎺': emoticons.music,
  '🪗': emoticons.music,
  '🎸': emoticons.music,
  '🪕': emoticons.music,
  '🎻': emoticons.music,
  '📯': emoticons.music,
  '💿': emoticons.music,
  '🎙': emoticons.music,
  '📻': emoticons.music,
  '🎵': emoticons.music,
  '🎶': emoticons.music,
  '🔈': emoticons.music,
  '🔉': emoticons.music,
  '🔊': emoticons.music,
  '🔇': emoticons.music,
  '🔔': emoticons.music,
  '🔕': emoticons.music,
  '📣': emoticons.music,
  '📢': emoticons.music,
  '🎁': emoticons.present,
  '🛍': emoticons.present,
  '🎀': emoticons.present,
  '⚽️': emoticons.ball,
  '🏟️': emoticons.ball,
  '🏀': emoticons.ball,
  '⚾️': emoticons.ball,
  '🥎': emoticons.ball,
  '🎾': emoticons.ball,
  '🏐': emoticons.ball,
  '🏉': emoticons.ball,
  '✈️': emoticons.airplane,
  '🛫': emoticons.airplane,
  '🛬': emoticons.airplane,
  '🛩': emoticons.airplane,
  '💺': emoticons.airplane,
  '🛄': emoticons.airplane,
  '🚗': emoticons.car,
  '🚕': emoticons.car,
  '🚙': emoticons.car,
  '🏎 ': emoticons.car,
  '🚓': emoticons.car,
  '🛺': emoticons.car,
  '🚔': emoticons.car,
  '🚘': emoticons.car,
  '🚖': emoticons.car,
  '🛣': emoticons.car,
  '🚦': emoticons.car,
  '🚥': emoticons.car,
  '⛽️': emoticons.car,
}

// Reference

let emojiArray = Object.entries(emojiList)
let emoticonArray = Object.entries(emoticons)
let numEmoji = document.getElementById('numEmojis').innerText =  emojiArray.length + 1

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
  tableEmoticon.innerHTML += `<div class="row"><div class="col"><img src=${emoticonArray[i][1].img}></div><div class="col-10">${emoticonToEmoji[i]}</div></div>`;
}