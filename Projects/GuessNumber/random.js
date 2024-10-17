const count = document.querySelector(".count")
const res = document.querySelector(".win")
const prev = document.querySelector(".prev")
const form = document.querySelector(".form")
let arr = []

function solve(){
    let number = parseInt(Math.random()*100 + 1)
    let inputval = parseInt(document.querySelector(".ip1").value)
    arr.push(inputval);
    let prevCount = count.textContent
    
    console.log(prevCount)
    prev.innerHTML = arr
    if(number !== inputval && prevCount >= 1){
        prevCount -= 1
        count.innerHTML = prevCount
        if(prevCount == 0){
            res.innerHTML = "Sorry! Better Luck NexTime"
            res.style.color = "red"
            resetgame();
        }
        document.querySelector(".ip1").value = ""
    }
    else if(number === inputval){
        res.innerHTML = "Congratulation!! you won"
        resetgame();
    }
}


function resetgame(){
    setTimeout(()=>{
        arr = []
        res.innerHTML ="";
        res.style.color = "green"
        count.innerHTML = 10
        prev.innerHTML = ""
        document.querySelector(".ip1").value = ""
    }, 500)
}


form.addEventListener('submit', (e)=>{
    e.preventDefault();
    solve();
})


