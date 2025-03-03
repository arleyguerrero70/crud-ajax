import { ToDo } from "/librery/ToDo.js"

window.addEventListener("load", (ev) =>{
    ToDo.all().then(todos => console.log(todos))
})