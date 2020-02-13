console.log('This is connected and working');


var d = new Date();
var b = d.getFullYear();
document.getElementById('copyright').innerHTML = b;

var gaming = prompt('What kind of board games do you enjoy?');
var greeting;
if(gaming === 'euro'){
    greeting = 'Ciao! Bienvenido! Bienvenue!';
} else if(gaming === 'party'){
    greeting = 'You can find plenty of friends here!';
} else if(gaming === 'puzzle'){
    greeting = 'uYo naC Fdni thaW uYo rAe ookLnig roF erHe.';
} else if(gaming === 'secret identity'){
    greeting = 'I see you are familiar with incognito.';
} else if(gaming === 'combat'){
    greeting = 'Grab the nearest sharp object and get in here!';
} else if(gaming === 'legacy'){
    greeting = 'Est. 1992';
} else if(gaming === 'deck builder'){
    greeting = 'Combining multiple things into one is what we do best here.';
} else {
    greeting = 'You probably said something awful like cooperative or uno. That is okay, we still welcome you.'
}
console.log(gaming);
document.write(greeting);


document.getElementById('clickhere').addEventListener("click", tellMe)
function tellMe(){
    var message = alert('You were not supposed to do that.');
}