
var scores, roundScore, activePlayer, gamePlaying;
//see the function startGame() at the buttom of the code

startGame();


document.querySelector('.btn-roll').addEventListener('click', function(){
    
    //when we click on 'ROLL DICE'
    
    if(gamePlaying){
        //for random dice number
        var dice = Math.floor(Math.random() * 6) +1;
    
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-'+ dice +'.png';
        
      //when dice no is 1
    
        if(dice !== 1){
            roundScore += dice;
            document.querySelector('#current-'+ activePlayer).textContent = roundScore;
        }else{
            next_player();
        }
    }

});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
        scores[activePlayer] += roundScore;
        document.querySelector('#score-'+ activePlayer).textContent = scores[activePlayer];
    
        if(scores[activePlayer] >= 100){
            
            document.querySelector('#name-'+ activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-'+ activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-'+ activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
    
        }
        else{
            next_player();
        }
    }

});

function next_player(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
};

document.querySelector('.btn-new').addEventListener('click', startGame);

function startGame(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';

document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');





};































//Azizul Tareq, NSU

//**
