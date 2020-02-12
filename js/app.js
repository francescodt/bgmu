console.log('This is connected and working');



var hourNow = prompt('What time is it? 0-23');
var greeting;
if(hourNow > 20 && hourNow < 24){
    greeting = 'Go to Bed';
} else if(hourNow >12 && hourNow < 20) {
    greeting = 'Good day person.';
} else if( hourNow >= 0 && hourNow < 24){
    greeting = 'Go to work, and Good Morning.';
} else {
    greeting = 'Wait, you didnt give me the right response. Who knows what time it is?'
}
console.log(greeting);
document.write(greeting);

var d = new Date();
var b = d.getFullYear();
document.getElementById('copyright').innerHTML = b;
