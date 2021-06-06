const $root = document.querySelector('.arenas')
const $randomButton = document.querySelector('.button')

const player1 = {
  playerNumber: 1,
  name: 'Scorpion',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  attack: function () {
    console.log(this.name + 'Fight...')
  },
  weapon: ['gun', 'shortgun', 'rocket'],
}

const player2 = {
  playerNumber: 2,
  name: 'liukang',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
  attack: function () {
    console.log(this.name + 'Fight...')
  },
  weapon: ['gun', 'shortgun', 'rocket'],
}

createElement = function (tag, className) {
  const $tag = document.createElement(tag)
  if (className) {
    $tag.classList.add(className)
  }

  return $tag
}

createPlayer = function (player) {
  const $player = createElement('div', 'player' + player.playerNumber)

  const $progressbar = createElement('div', 'progressbar')
  $player.appendChild($progressbar)

  const $life = createElement('div', 'life')
  const $name = createElement('div', 'name')
  $name.innerText = player.name

  $progressbar.appendChild($life)
  $progressbar.appendChild($name)

  const $character = createElement('div', 'character')

  $player.appendChild($character)

  const $img = document.createElement('img')
  $img.src = player.img

  $character.appendChild($img)

  return $player
}

playerWin = function (name) {
  const $winTitle = createElement('div', 'winTitle')
  if (name === undefined) {
    $winTitle.innerText = 'nobody won, draw'
  } else {
    $winTitle.innerText = name + ' win'
  }
  return $winTitle
}

changeHP = function (player) {
  const $playerLife = document.querySelector(
    `.player${player.playerNumber} .life`
  )
  player.hp -= Math.ceil(Math.random() * 20)
  if (player.hp <= 0) {
    player.hp = 0
    return true
  }

  $playerLife.style.width = player.hp + '%'

  return false
}

$randomButton.addEventListener('click', () => {
  // console.log('####: Click Random Button', player2.hp)
  lose1 = changeHP(player1)
  lose2 = changeHP(player2)

  if (lose1 && lose2) {
    $root.appendChild(playerWin()) //ничья "nobody won, draw"
  } else if (lose1) {
    $root.appendChild(playerWin(player2.name))
  } else if (lose2) {
    $root.appendChild(playerWin(player1.name))
  }
  if (lose1 || lose2) {
    document.querySelector('.button').style.visibility = 'hidden'
  }
})

$root.appendChild(createPlayer(player1))
$root.appendChild(createPlayer(player2))

// document.getElementById('myBtn').disabled = true
