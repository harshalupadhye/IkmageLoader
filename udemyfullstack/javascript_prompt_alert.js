// alert("Welcome to weight converter!!!! your weight in pounds would be converted into kilograms");
// var pounds = prompt("Enter the weight in pounds");
// var kilo = pounds*0.454;
// alert("your weight in kilogram is "+kilo);
// console.log("your weight in kilogram is "+kilo);
// var temp = prompt("enter the temprature");
// if(temp>-5 && temp<0){
//     alert("it is a winter");
// }
// else if(temp>0 && temp<30){
//     alert("it is a summer");

// }
// else{
//     alert("invalid temprature")
// }
// var i=0;
// while(i<5){
//     alert("number is "+i);
//     console.log(i);
//     i++;
// }
// for(var i=0;i<5;i++){
//     alert("number is "+i);
//     console.log(i);
// }
alert("How to spot the spy")
var fname=prompt("Please tell your first name");
var lname=prompt("Please tell your last name");
var age = prompt("please enter your age");
var height = prompt("your height please");
var pet = prompt("your pet name please");

if(fname[0]==lname[0]){
   while(age >!20 && age<! 30){
    alert("you are clear")
    break;
   }
   while(height>!170){
    alert("you are clear")
    break;
   }
   while(pet[pet.length-1]!=="y" || pet[pet.length-1]!=="Y"){
    alert("you are clear")
    break; 
   }
  
}
else{
   
    alert("you are clear")
    alert(pet.length)
}