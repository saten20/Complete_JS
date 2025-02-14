/************* Events is JS ***************/
// JS is synchronous , single threaded language.

// There are three way to implement the event.
// Inline event --> we can directly add the event in tag. This is the worst pratice
// we can add the event after fetching the element from the script i.e 
// document.getElementById("name").onclick(()=>{ }). This is also not the good practice.

// we can add the event using the addEventListener() method. This is the best practice of adding the event listener
// element.addEventListener('eventName', (e)=>{ }, false).it takes three parameter
// first parameter is the name of the listener which is pass in the single quote.
// second is callback function(when function pass as the argument in other function then it is called as call back function.(Arrow/Normal fun)).
// Third parameter is reponsible for event propagation,by  default it is marked as false.

// e -- object contain the multiple property of the event. some of the important property are
// type, timestamp, preventDefault(), target, toElement, srcElement, currentTarget, clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode, tagName().


//************************Event propagation************************

// Bubbling phase(false) -- if third parameter is false(default) 
// Event is propogate from bottom to top i.e first target node event Listner will executed then it's parent node event  Listener will execute.

// Capturing phase(true) -- if third parameter is true
// Event is propogate from top to bottom i.e first the parent Node event Listener will executed then target Node event Listner will executed.
// In this phase from root to target first parent event executed then the targeted event executed. it flow from root to target event.
// e.stopPropgation() method will stop the propagation of the event.








// Event Capturing -- (when we keep true) first parent then child (top to bottom)
document.querySelector(".parent").addEventListener('click',()=>{
    console.log("parent hit")
}, false);

// Event bubbling --(when we keep false) first child will excute then parent (bottom to top)
document.querySelector(".child").addEventListener('click', ()=>{
    console.log("child hit")
}, false)