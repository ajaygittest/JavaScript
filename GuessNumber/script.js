'use strict';


let secret=Math.trunc(Math.random()*20)+1;
let score=20;
let highScore=0;



document.querySelector('.check').addEventListener('click', function(){
const guess=Number(document.querySelector('.guess').value);

const displayMessage=function(message){
  document.querySelector('.message').textContent=message;
}

if(!guess){
  displayMessage('⛔ No Number!');
}else if(guess===secret){

  displayMessage('🎉 Correct Number!');

  document.querySelector('body').style.backgroundColor='#60b347';

  document.querySelector('.number').style.width='30rem';
  document.querySelector('.number').textContent=secret;


  if(score > highScore){
    highScore=score;
    document.querySelector('.highscore').textContent=highScore;
  }

}else if(guess !==secret){
    if(score>1){
  document.querySelector('.message').textContent=guess>secret?"📈 To High":"📉 To Low";
  score--;
  document.querySelector('.score').textContent=score;
  }else{
    displayMessage('💥 You Lost the Game');
    document.querySelector('.score').textContent=0;
  }
}
});


document.querySelector('.again').addEventListener('click', function(){

  score=20;
  secret=Math.trunc(Math.random()*20)+1
  displayMessage('Start Guessing.......');
  document.querySelector('.score').textContent=score;
  document.querySelector('.number').textContent='?';
  document.querySelector('.guess').value='';
  
  document.querySelector('body').style.backgroundColor='#222';

  document.querySelector('.number').style.width='15rem';

});