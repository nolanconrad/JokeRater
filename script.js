buzzer = new Audio('buzzer.mp3')
ding = new Audio('ding.mp3')
winner = new Audio('priceisRight.mp3')

ding.volume = 0.5
winner.volume = 0.2

function funny() {
    ding.play()
}

function notFunny() {
    buzzer.play()
}

function aWinner() {
    winner.play()
}