let homeScoreEl = document.getElementById('home-score-value')
let guestScoreEl = document.getElementById('guest-score-value')
let timeRemainingEl = document.getElementById("time-remaining")

let secondsRemaining = 15 * 60


let homeScore = 0
let guestScore = 0

function addHome (amount) {
    homeScore += amount
    homeScoreEl.textContent = homeScore
}

function addGuest (amount) {
    guestScore += amount
    guestScoreEl.textContent = guestScore
}

function resetGame() {
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
}



function getRemainingTimeText() {
    minsRemain = Math.floor(secondsRemaining / 60)
    txtsecsRemaining = secondsRemaining % 60
    if (txtsecsRemaining < 10) { txtsecsRemaining = '0' + txtsecsRemaining }
    timeString = minsRemain + ':' + txtsecsRemaining
    return timeString
}


function updateTime() {
    timeString = 'Time Remaining: ' + getRemainingTimeText()
    if (secondsRemaining <= 0) {timeString = 'GAME OVER!'}
    timeRemainingEl.textContent = timeString
}

function runClock() {
    while (secondsRemaining > 0) {
        secondsRemaining = secondsRemaining - 1;
        updateTime();
        setTimeout(() => 
            console.log('test'), 1000)
    };
    updateTime()
}


// runClock()