

var randomNo=Math.floor(Math.random() * 6) + 1;
var imageSource="images/dice"+ randomNo +".png";
document.querySelectorAll("img")[0].setAttribute("src",imageSource);

var randomNo2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNo2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if(randomNo > randomNo2){
    document.querySelector("h1").textContent="Player1 wins";
} 
else if(randomNo < randomNo2){
    document.querySelector("h1").textContent="Player2 wins";
}
 else{
    document.querySelector("h1").textContent="Draw";
}





/*var randomNo2=Math.floor(Math.random() * 6) + 1;
var imageSource2="images/dic" + randomNo2 +".png";
document.querySelectorAll("img")[1].setAttribute("src", imageSource2);*/

