console.log('This is connected and working');


var d = new Date();
var b = d.getFullYear();
document.getElementById('copyright').innerHTML = b;



function welcoming() {
// Conciously conscripted courtesy of one Mr. Craig Barkley
    var gaming = prompt('What kind of board games do you enjoy?').toLowerCase();
    var greeting;
    document.getElementById('baby').innerHTML = greeting
    if(gaming === 'euro'){
        document.getElementById('baby').innerHTML = 'Ciao! Bienvenido! Bienvenue!';
} else if(gaming === 'party'){
        document.getElementById('baby').innerHTML = 'You can find plenty of friends here!';
} else if(gaming === 'puzzle'){
        document.getElementById('baby').innerHTML = 'uYo naC Fdni thaW uYo rAe ookLnig roF erHe.';
} else if(gaming === 'secret identity'){
        document.getElementById('baby').innerHTML = 'I see you are familiar with incognito.';
} else if(gaming === 'combat'){
        document.getElementById('baby').innerHTML = 'Grab the nearest sharp object and get in here!';
} else if(gaming === 'legacy'){
        document.getElementById('baby').innerHTML = 'Est. 1992';
} else if(gaming === 'deck builder'){
        document.getElementById('baby').innerHTML = 'Combining multiple things into one is what we do best here.';
} else {
        document.getElementById('baby').innerHTML = 'You probably said something like a cooperative or uno. That is okay, we still welcome you.'
 }
// console.log(gaming);
// document.write(greeting);
// document.getElementById('baby').innerHTML = 

}
welcoming();




// Conciously conscripted courtesy of w3schools.com
document.getElementById('clickhere').addEventListener("click", tellMe)
function tellMe(){
    var message = alert('I hope you have a great day.');
}

document.getElementById('otherthings').addEventListener("click", goAway)
function goAway(){
    var message = alert('Why not click below?');
}
   




var howMany = function() {
    var count = prompt('How many people are you looking to play with?');
  
    while (count === '' || isNaN(count)) {
      count = prompt('please enter a number');
    }
  
    console.log('howMany():', Number(count));
    return Number(count);
  }
  
  var getItem = function() {
    var order = prompt('Do you enjoy chess or other style games?').toLowerCase;
    var item;
  
    while (order !== 'chess' && order !== 'other style') {
      order = prompt('please enter chess or other style');
    }
  
    if (order === 'chess') {
      item = '<img src="https://media-cdn.tripadvisor.com/media/photo-s/09/d8/0a/09/img-hotel.jpg">';
    } else if (order === 'other style') {
      item = '<img src="https://img.freepik.com/free-vector/colorful-houses-collection-flat-style_23-2147787131.jpg?size=338&ext=jpg">';
    }
  
    console.log('getItem():', item);
  
    document.write(item);
    return item;
  }
  
  var showOrder = function() {
    var item = getItem();
    var total = howMany();
    var result = '';
  
    for (var i = 0; i < total; i++) {
      result = result + '<p>Model #' + i + ' ' + item + '</p>';
    }
  
    console.log('showOrder():', result);
    return result;
  }
  
  // howMany();
  // getItem();
  // showOrder();