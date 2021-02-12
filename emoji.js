//Verificar se está rodando no domínio certo

let emoji = () => document.getElementById('emoji').value;

// console.log("😀")npm

const mostraConteudo = () => {
  if (document.getElementById('emoji').value == "😇") {
    document.getElementById('result').innerText = '(a)'
    document.getElementById('resultEmoticon').innerHTML = '<img src="./emoticon/faces/angel_smile.gif" alt="">';
    console.log('Feliz')
  }
}