// const Game = "saketh@gmail.com"
// const Value = 50 
// console.log(Game + Value + " kumar")
// //the above type of string usage is not recommended instead we use string interpolation ${}
// console.log(`hello my name is ${Game} and my rank is ${Value}`)
// //usage of "" is not allowed we use `` (backticks)

//one more method to declare strings is with the help of the new keyword 
const Var = new String("saketh-kumar.com")
//  console.log(Var.toUpperCase())
 const surname = Var.substring(0,6)
//  console.log(surname)

 const slicee = Var.slice(-8,10)
 console.log(slicee)
 //slice has two args start and end 
 //end digit is not included
 //we can also use slice with one argument that will be start 
 const add = "    sakethhhh.     "
 console.log(add.trim())
 //trim removes spaces
 console.log(add.trimRight())
 console.log(add.indexOf('h'))
 console.log(add.small())
