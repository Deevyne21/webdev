// alert("hello")
// console.log("hello Dee")
// var x = 7
// var a = 15
// var b = "Hi Dee"
// var name = "Blessing"
// var b = "name"
// console.log(name)

// var num1  = 8
// var num2 = 10
// var num3 = 15
// var num4 = 7
// var sum = num1 + num2 + num3 + num4
// console.log(sum/2)

// Conditional Statement
// if (message == 'hello'){
//     console.log('how are you?')
// }else if(message =='I am fine'){
//     console.log('Thats good!')
// }else if(message=='I am not fine'){
//     console.log('What is the problem?')
// }else{
//     console.log('Take care!')
// }


// var age = 12
// var level = "JSS1"

// if(age <= 18){
//     if(level == "JSS1"){
//         console.log("You are eligible")
//     }else{
//         console.log("Your level is not eligible")
//     }
// }else{
//     console.log("Your age is not eligible")
// }

// conditional operations(&& "and")(||(or))
// if(5 == 2 || 3 > 1){
//     console.log("true")

// }else{
//     console.log("false")
// }
// var age = 12
//  if (age <= 18 && level=="JSS1" ){
//      console.log("You are eligible")

//  }else{
//     console.log("You are not eligible")
//  }


// Array are pack of values or data
// var names =["John", "Mary",  "peter", "Paul", ["boy",["sports", "hobby"],"girl"]]

// How to get or select an item in array
// console.log(names)

// How to update an item in the array
// names[1] = "Sara"
// console.log(names)

// Adding an item to the array
// names[5] = "Ada"

// Multidimensional array
// console.log(names[4][1][1])

// Object
// var age =30
// var eye = "blue"
// var hair = "black" 



// To make your function dynamic pass in your argument/parameter in the function body

// Console is an inbuilt object while log is an inbuilt method.
// Selecting data from and object: we select data from an obect using key
// person.age

// How to update an object data
// person.age =35
// console.log(person.age)

// Multidimensional Object
// var person = {
//     age:30, 
//     eye:"blue", 
//     hair: "black",
//     vitals:{
//         genotype: "AA",
//         blood_group: "O+",
//         bmi:31

//     },
//     sports:["Soccer", "Tennis", {hand:"volleyball"},"Basketball"]
// }
// // console.log(person.vitals.bmi)
// // console.log(person.sports[1])
//     console.log(person.sports[2].hand)


// Loops
// var x = 0;
// while(x < 10){
//     console.log("Frontend")
//     // x++  (x= x + 1)
// }
// var names = ["John", "Peter", "James", "Mary"];
// for(var i = 0; i < 4; x++){
// console.log(names[i])
// if (names[i] == "James"){
//     console.log(names[i])
// }else{
//      console.log("not James")

// }
// }

// Functions: are programs execute only when they are being called
// function saySomething(){
//     //  var x =8
//     //  var y  =7
//     // console.log(x+y)
//     // console.log("My name is "+z)

//     return 10
// }

// console.log(saySomething(5,8, "Dee"))

// // console.log("something else...")
// saySomething(10,6, "Mary")


//with return keyword, function return any value that is put in the return value.
// Return also stop any other code written under the return value from running.
// Types of function: User defined function or generated function
// Inbuilt Function: Communicate to Javascript compiler to execute e.g alert function


// Methods are functions under object
// var person = {
//     name: "John",
//     age: 25,
//     speak: function(word){
//         console.log(word)
//     },
//     sum:function(x , y){
//         // var x =8
//         // var y =11
//         console.log(x+y)
//     }
// }
// person.speak("This is a word")
// person.speak("I am speaking a particular word")
// person.sum(11, 9)


// DOM manipulation: Is being able to access our html and manipulate it the way we want.

// Global keyword called "documet" that is an object with method
// var logo_text = document.getElementById("logo-text")
// logo_text.style.fontSize = "50px"


//  var p = document.getElementsByClassName("p")
// console.log(p)

// var modal_background = document.getElementById("modal-background")
// modal_background.style.display = "none"
// console.log(modal_background)


// Event: These are types of events in Js e.g:
// Mouse over, On click, Mouse pointer, click event, scroll event and so on...

// var menu = document.getElementById("menu")
// menu.addEventListener("click", function(){
//     console.log("I have been clicked!")
// var modal_background = document.getElementById("modal-background")
//     modal_background.style.display = "none"
//     console.log(modal_background)
//     console.log("close")
// })
// var modal_background = document.getElementById("modal-background")
// var modal = document.getElementById("modal")
// var close = document.getElementById("close")
// close.addEventListener("click", function(){
//         modal_background.style.display = "none"
// })

// var p = document.getElementsByClassName("p")
// console.log(p)
// p[0].style.color = "yellow"

// // Use for loop if the element by class name are more than two in an array

//  for(var i = 0; i<p.length; i++){
//         p[i].style.color = "red"
// }

// var btn = document.getElementById("btn")
// btn.addEventListener("click", function(){

//         var fullname = document.getElementById("fullname")
//         console.log(fullname.value)
//  })

// function shout(){
//         var fullname = document.getElementById("fullname")
//         console.log(fullname.value)

// }


// btn.addEventListener("click", function() {
//     var fullname = document.getElementById("fullname")
//     var email = document.getElementById("email")
//     var subject = document.getElementById("subject")
//     var message = document.getElementById("message")
//     console.log(fullname.value)
//     console.log(email.value)
//     console.log(subject.value)
//     console.log(message.value)

// })

// var btn = document.getElementById("btn")
// btn.addEventListener("click", function() {
//     var message = document.getElementById("message")
//     console.log(message.value)

// })

// var btn = document.getElementById("btn")
// btn.addEventListener("click", function() {
//     var subject = document.getElementById("subject")
//     console.log(subject.value)

// })
// Form Validation
// function validate() {
//     var fullname = document.getElementById("fullname")
//     var email = document.getElementById("email")
//     var phone = document.getElementById("phone")
//     var subject = document.getElementById("subject")
//     var message = document.getElementById("message")


//     if (fullname.value == "") {
//         alert("Fullname cannot be empty!")
//         return false
//     } else if (email.value == "") {
//         alert("Enter your email")
//         return false

//     } else if (email.value.includes("@") == false) {
//         alert("email is invalid")
//         return false

//     } else if (phone.value == "") {
//         alert("Phone cannot be empty")
//         return false

//     } else if (isNaN(phone.value) == true) {
//         alert("Only numbers allowed for phones!")
//         return false

//     } else if (phone.value.length > 11) {
//         alert("phone number cannot be greater than 11 digits!")
//         return false

//     } else if (phone.value.length < 11) {
//         alert("phone number cannot be less than 11 digits!")
//         return false

//     } else if (subject.value == "") {
//         alert("Subject cannot be empty")
//         return false

//     } else if (message.value == "") {
//         alert("Enter your message")
//         return false

//     } else {
//         return true
//     }

// }

// There are two inbuilt functions: setInterval(), setFrequency
// SetIntervals is the time for it to run: the time is set in minsecs every 1000 is 1sec
// SetFrequency
// Set Time-Out: is a function call that set in the time to run your code in minsec

// var time = 10
//     // setInterval(function() {
//     // setInterval(function() {
// var interval = setInterval(function() {
//     time--
//     if (time == 0)
//         clearInterval(interval)
//     console.log(time)
// }, 5000)



// setTimeout(function() {
//     console.log("jumping")
// }, 1000)


AOS.init();