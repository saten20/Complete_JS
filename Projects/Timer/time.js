const element = document.querySelector("div")
console.log(element)

setInterval(()=>{
    const date = new Date();
    const time = date.toLocaleTimeString();
    element.innerHTML = `<span>${time}</span>`
}, 1000)