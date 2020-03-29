var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;

var imgage1="images/"+"dice"+randomNumber1+".png";
var imgage2="images/"+"dice"+randomNumber2+".png";

var rand1=document.querySelectorAll("img")[0];
rand1.setAttribute("src", imgage1);

var rand2=document.querySelectorAll("img")[1];
rand2.setAttribute("src",imgage2);



if(randomNumber1>randomNumber2)
document.querySelector("h1").innerHTML="😜 Player 1 Wins ";
else if(randomNumber1<randomNumber2)
document.querySelector("h1").innerHTML="Player 2 Wins 😜";
else {
document.querySelector("h1").innerHTML="Draw";
}
