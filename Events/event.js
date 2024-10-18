/************* Events is JS ***************/
// JS is synchronous , single threaded language.

// There are three way to implement the event.
// Inline event --> we can directly add the event in tag. This is the worst pratice
// we can add the evenet after fetching the element from the script i.e 
// document.getElementById("name").onclick(()=>{ }). This is also not the good practice.

// we can add the event using the addEventListener() method. This is the best practice of adding the event listner
// element.addEventListener('eventName', (e)=>{ }, false).it takes three parameter
// first parameter is the name of the listener which is pass in the single quote.
// second is callback function.
// Third parameter is default false marked.it is reponsible of event propagation.


//************************Event propagation************************

// Bubbling phase(false) -- if third parameter is false(default) (bottom to top)
// In this phase event propagate from the root to document to html then target. once target event executed then from target to root other will start 
// execution.first target event will execute then their parent event will execute.

// Capturing phase(true) -- if third parameter is true(top to down)
// In this phase from root to target first parent event executed then the targeted event executed. it flow from root to target event.
// e.stopPropgation() method will stop the propagation of the event.


// e -- object contain the multiple property of the event. some of the important property are
// type, timestamp, preventDefault(), target, toElement, srcElement, currentTarget, clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode, tagName().






// Event Capturing -- (when we keep true) first parent then child (top to bottom)
document.querySelector(".parent").addEventListener('click',()=>{
    console.log("parent hit")
}, true);

// Event bubbling --(when we keep false) first child will excute then parent (bottom to top)
document.querySelector(".child").addEventListener('click', ()=>{
    console.log("child hit")
}, true)