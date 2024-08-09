let homeScoreEl = document.getElementById('home-score-value')
let guestScoreEl = document.getElementById('guest-score-value')

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