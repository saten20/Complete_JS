const form = document.querySelector("form")
console.log(form)

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const height = parseInt(document.querySelector("#ip1").value)
    const weight = parseInt(document.querySelector("#ip2").value)
    
    const res = document.querySelector("#res")

    const ans = ((weight) / ((height * height) / 10000)).toFixed(2)
    
    res.innerHTML = `<span>${ans}</span>`

    const mess = document.querySelector("#mess")
    if(ans < 18){
        mess.innerHTML = `<span>Under Weight</span>`
    }
    else if(ans > 18 && ans < 24){
        mess.innerHTML = `<span>Normal Weight</span>`   
    }
    else{
        mess.innerHTML = `<span>Over Weight</span>`   
    }
})