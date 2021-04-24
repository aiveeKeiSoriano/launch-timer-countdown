const daynum = document.getElementById('daynum')
const hournum = document.getElementById('hournum')
const minnum = document.getElementById('minnum')
const secnum = document.getElementById('secnum')

function startCountdown(mon, day, hr, min) {
    let current = new Date()
    let given = new Date(current.getFullYear(), mon - 1, day, hr, min, 00)
    current = new Date()
    let days = (given.getTime() - current.getTime()) / 86400000
    daynum.innerText = Math.floor(days)
    let hours = ((days % 1) * 86400000 ) / 3600000
    hournum.innerText = Math.floor(hours)
    let minutes = ((hours % 1) * 3600000) / 60000
    minnum.innerText = Math.floor(minutes)
    let seconds = ((minutes % 1) * 60000) / 1000
    secnum.innerText = Math.floor(seconds)
}

setInterval(() => startCountdown(7, 15, 15, 00), 1000)
