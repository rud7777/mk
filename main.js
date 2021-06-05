// begin

const player1 = {
  name: 'Scorpion',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
}

const player2 = {
  name: 'liukang',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
}

weapon = ['gun', 'shortgun', 'rocket']

attack = function () {
  console.log(player1.name + 'Fight...')
}

createPlayer = function (classPlayer, player) {
  console.log(player)
  const $player1 = document.createElement('div')
  $player1.classList.add(classPlayer)

  const $root = document.querySelector('.arenas')
  $root.appendChild($player1)

  const $progressbar = document.createElement('div')
  $progressbar.classList.add('progressbar')
  $player1.appendChild($progressbar)

  const $life = document.createElement('div')
  $life.classList.add('life')
  // $life.innerText = player.hp

  const $name = document.createElement('div')
  $name.classList.add('name')
  $name.innerText = player.name

  $progressbar.appendChild($life)
  $progressbar.appendChild($name)

  const $character = document.createElement('div')
  $character.classList.add('character')

  $player1.appendChild($character)

  const $img = document.createElement('img')
  $img.src = player.img

  $character.appendChild($img)
}
attack()
// createPlayer('player1', 'SCORPION', 50)
// createPlayer('player2', 'SUB-ZERO', 80)
createPlayer('player1', player1)
createPlayer('player2', player2)
