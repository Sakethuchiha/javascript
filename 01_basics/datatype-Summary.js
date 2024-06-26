//primitive datatypes are called by value and non primitive are called by reference

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//type of null is an object 
//object has key value pairs 
// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  functionobject 
//        Object  =>  object
//space management 

// primitive datatypes use stack and non primitive use heap memory
// when creating in stack it creates a copy of the location 
// while in heap it points to the same memory location 
let A = "saketh"
let B= A
 B = "harsha"
console.log(A)
console.log(B)
//when chaning the value of b it is changing 

//in non primitive 

let objOne = 
{
    email:"user@gmail.com",
    id:123
}
let objTwo = objOne
objTwo.email = "user@google.com"
console.log(objTwo)
console.log(objOne)
// { email: 'user@google.com', id: 123 }
// { email: 'user@google.com', id: 123 }
//the value didnot change because the both variables are pointing to the same reference 