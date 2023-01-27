// 1. find the index of banana and replace with mango, b) remove orange and add watermelon
// find the index
var fruits = ['Apple', 'Banana', 'Orange'];
var index = fruits.indexOf('Banana');
console.log(index);
// replace
fruits[1] = 'Mango';
console.log(fruits);
// remove
var removed = fruits.pop();
console.log(fruits);
console.log(removed);
// add
fruits.push('Watermelon');
console.log(fruits);

// 2. 
var myScore = 85;
var tomsScore = 66;
var janesScore = 95;
var petersScore = 56;
var johnsScore = 40;

// myScore
if(myScore >= 80){
    console.log('My grade is A')
}
else if(myScore >= 60){
    console.log('My grade is B')
}
else if(myScore >= 50){
    console.log('My grade is C')
}
else if(myScore >= 40){
    console.log('My grade is D')
}
else if(myScore <= 39){
    console.log('My grade is F')
}
else{
    console.log('Study well!!')
}

// petersScore
if(petersScore >= 80){
    console.log('Peters grade is A')
}
else if(petersScore >= 60){
    console.log('Peters grade is B')
}
else if(petersScore >= 50){
    console.log('Peters grade is C')
}
else if(petersScore >= 40){
    console.log('Peters grade is D')
}
else if(petersScore <= 39){
    console.log('Peters grade is F')
}
else{
    console.log('Study well!!')
}

// 3.
var num1 = 13;
var num2 = 79;
var num3 = 45;

if(num1 > num2 && num1 > num3){
    console.log('num1 = ' + num1 + ' is the greatest');
}
else if(num2 > num1 && num2 > num3){
    console.log('num2 = ' + num2 + ' is the greatest');
}
else{
    console.log('num3 = ' + num3 + ' is the greatest');
}

4.
var x = 9;
var y = 8;
var z = 9;

if(x == y && y == z){
    console.log('Equilateral Triangle');
}
else if(x == y || x == z || y == z){
    console.log('Isosceles Triangle');
}
else{
    console.log('Scalene Triangle');
}