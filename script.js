var randomNumber1 = Math.floor((Math.random() * 6) + 1);

var randomImage = "images/dice" + randomNumber1 + ".png";

var a = document.querySelectorAll("img")[0];

a.setAttribute("src",randomImage);


var randomNumber2 = Math.floor((Math.random() * 6) + 1);

var randomImage = "images/dice" + randomNumber2 + ".png";


var b = document.querySelectorAll("img")[1];

b.setAttribute("src",randomImage);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Won!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Won!🚩";
}else{
    document.querySelector("h1").innerHTML = "It's a tie!";
}