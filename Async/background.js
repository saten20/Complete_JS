const element = document.getElementById("body")
const start = document.getElementById("start")
const stop = document.getElementById("stop")


function colorgen(){
    const hex = "0123456789ABCDEF";
    let color = "#";

    for(let i = 0; i < 6; i++){
        let idx = Math.floor(Math.random()*16);
        color += hex[idx];
    }
    return color;
}

start.addEventListener('click', ()=>{
    const hold = setInterval(()=>{
        element.style.backgroundColor = colorgen()
    }, 1000)

    stop.addEventListener('click',()=>{
        clearInterval(hold)
    })
})
    