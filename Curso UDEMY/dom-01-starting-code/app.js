/* METHODS

Single elements: 
querySelector()

nomenclatura de CSS adentro del parentesis
".list-item"  =>class
"#list-item"  =>id
"list-item"  =>tag


getElementById()


Multiple elements, array-like objects
querySelectorAll()
getElementsByTagName()


*/

const item = document.querySelector(".list-item")

const h1  = document.getElementById("main-title");
h1.textContent = "Some new title!";
h1.style.color = "white";
h1.style.backgroundColor = "black";

//const li = document.querySelectorAll("li")
//for (element of li) {element.textContent = li.textContent + "aaaaa"};

const tarea  = document.querySelector("li");
console.log(tarea)
tarea.style.backgroundColor = "red"

const tarea2  = document.querySelectorAll("li");
console.log(tarea2)
for (element of tarea2) {element.style.color = "green"};

const newHead = document.getElementById("tareaHead1")
newHead.textContent = "SOLVEEEEED";

//tarea.style.color = "white";
//tarea.style.backgroundColor = "black";



const ul = document.querySelector("ul")
console.log("esto es UL:")
console.log(ul)


//EMPEZAR DESDE VIDEO 161