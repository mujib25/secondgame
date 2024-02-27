let squares = document.querySelectorAll('.square');
let input = document.querySelector('input')


let GameResult = document.querySelector('.gameFinished')
let playAgain = document.querySelector('.refresh')
let undo = document.querySelector('.undo')
undo.style.opacity='0'

undo.addEventListener('click', function() {
    location.reload()
})

GameResult.innerText = 'Game Result'
GameResult.style.display='none'
GameResult.style.opacity = '0';


let totalTry = document.querySelector('.totalattempts')

let remainingAttempts = 7;
totalTry.innerText = 'Total Attempts Are: '+ remainingAttempts;

let foundX = document.querySelector('h4')
let found = 0;
foundX.innerText = 'Total X Found: ' + found

let randomNumbers = [];
while (randomNumbers.length < 8) {
    let randomNumber = Math.floor(Math.random() * 8);
    if (!randomNumbers.includes(randomNumber)) {
        randomNumbers.push(randomNumber);
    }
}


squares.forEach(function(square, index) {
    square.style.color='orange'
    square.addEventListener('click', function() {
        square.style.color='white'
        if (!square.classList.contains('active')) {
            square.classList.add('active');
            remainingAttempts--;
            totalTry.innerText = 'Total Attempts Are: ' + remainingAttempts;
            
            if(square.innerText==="X"){
                found++
                foundX.innerText = 'Total X Found:' + found
            }
            // {found===5 ? GameResult.style.display='block'  : ''}
            if(found===5){
                setTimeout(() => {
                    GameResult.style.display='block'
                    GameResult.innerText='Winner ' + found + 'X '
                    GameResult.offsetWidth;
                    GameResult.style.transition = 'opacity 0.3s ease-in';
                    GameResult.style.opacity = '1'; 
                    undo.style.opacity='1'
                }, 200);
            }
           else if(!found===5 || remainingAttempts===1){
            setTimeout(() => {
                GameResult.style.display='block'
                GameResult.innerText='Looser '+ found +'X '
                GameResult.offsetWidth;
                GameResult.style.transition = 'opacity 0.3s ease-in';
                GameResult.style.opacity = '1';
                undo.style.opacity='1' 
            }, 200);
           }
           else{

           }
        }
    });
    randomPositionX = randomNumbers[index];
    if(randomPositionX===0 || randomPositionX===2 
        || randomPositionX ===3 || randomPositionX === 5 || randomPositionX === 7)
    {
        square.innerText ='X';
    }
    else{
        square.innerText ='O';
    }
});
