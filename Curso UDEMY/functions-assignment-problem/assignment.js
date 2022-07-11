 

const sayHello1 = (name) => {
  console.log('Hi ' + name);
}

sayHello1("Agustin")



const sayHello2 = (greeting, name) => {
  console.log(greeting + name);
}

sayHello2("Hola", "Agus")


const sayHello3 = () => {
  console.log("Hola3 Agustin3");
}

sayHello3() 


const sayHello4 = (name) => {
  return ('Hi4 ' + name);
}


console.log(sayHello4("Agustin4"))

const sayHelloCallBack = (name) => {
  console.log('Hi ' + (name || "you!")); 
}

sayHelloCallBack("CallBack")
sayHelloCallBack()

const sayHelloManyArguments = (name, ...others) => {
  console.log('Hi ' + (name || "there") + others ); 
}

sayHelloManyArguments  ("A", "B", "C", "D", "E")
sayHelloManyArguments ()