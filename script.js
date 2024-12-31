const daysHtml = document.getElementById("day")
const hoursHtml = document.getElementById("hours")
const minHtml = document.getElementById("minutes")
const secHtml = document.getElementById("seconds")


let comingRamzan = new Date("3/1/2025").getTime()



let interval = setInterval(() => {
    let currentDate = new Date()
    let diff = comingRamzan - currentDate.getTime()



    let days = Math.round(diff / 1000 / 60 / 60 / 24)
    // let hours =  Math.round(diff / 1000 / 60 / 60)
    let hours = 24 - currentDate.getHours();
    // let minutes = Math.round(diff / 1000 / 60)
    let minutes = 60 - currentDate.getMinutes()
    // let sec = Math.round(diff / 1000)
    let sec = 60 - currentDate.getSeconds()

    // console.log(sec, minutes, hours, days)
    daysHtml.innerText = days
    hoursHtml.innerText = hours
    minHtml.innerText = minutes
    secHtml.innerText = sec

}, 1000)
