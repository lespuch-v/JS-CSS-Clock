const secondHand = document.querySelector(".second-hand")
const minuteHand = document.querySelector(".min-hand")
const hourHand = document.querySelector(".hour-hand")

function setDate(){
    const now = new Date()
    
    const seconds = now.getSeconds()
    const secondDegrees = ((seconds / 60) * 360) + 90
    secondHand.style.transform = `rotate(${secondDegrees}deg)`
    
    const minute = now.getMinutes()
    const minutesDegree = ((minute / 60) * 360) + ((seconds/60)*6) + 90;
    minuteHand.style.transform = `rotate(${minutesDegree}deg)`
    
    const hour = now.getHours()
    const hourDegrees = ((hour / 12) * 360) + ((minute/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`
}
setInterval(setDate,1000)



setDate()