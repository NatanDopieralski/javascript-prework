function playGame(playerInput){
  clearMessages();





  function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    }
    if(argMoveId == 2){
      return 'papier'
    }
    if(argMoveId == 3){
      return 'nożyce'
    }
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }


  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  let computerMove = getMoveName(randomNumber);

  /*
  if(randomNumber == 1){
    computerMove = 'kamień';
  } else if (randomNumber == 2){
      computerMove = 'papier';
  } else if (randomNumber == 3){
      computerMove = 'nożyce';
  }
  */



  printMessage('Mój(komputer) ruch to: ' + computerMove);

  //let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

  console.log('Gracz wpisał: ' + playerInput);

  let playerMove = getMoveName(playerInput);

  /*
  if(playerInput == '1'){
    playerMove = 'kamień';
  } else if (playerInput == '2'){
      playerMove = 'papier';
  } else if (playerInput == '3'){
      playerMove = 'nożyce';
  }
  */

  printMessage('Twój(gracz) ruch to: ' + playerMove);


  function displayResult(argComputerMove, argPlayerMove){
    printMessage('Zagrałem(komputer): ' + argComputerMove + ', a Ty(gracz): ' + argPlayerMove);
    console.log(argComputerMove, argPlayerMove)
  
    if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
      printMessage('Ty wygrywasz!(gracz)');
    } else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
      printMessage('Ty wygrywasz!(gracz)');
    } else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
      printMessage('Ty wygrywasz!(gracz)');
    } else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
      printMessage('Ty wygrywasz!(komputer)');
    } else if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
      printMessage('Ty wygrywasz!(komputer)');
    } else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
      printMessage('Ty wygrywasz!(komputer)');
    } else if(argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
      printMessage('remis');
    } else if(argComputerMove == 'papier' && argPlayerMove == 'papier'){
      printMessage('remis');
    } else if(argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
      printMessage('remis');
    } else if(argPlayerMove > '3'){
      printMessage('zła liczba');
    }
  }
  displayResult(computerMove, playerMove)


  /*
  if( computerMove == 'kamień' && playerMove == 'papier'){
      printMessage('Ty wygrywasz!(gracz)');
    } else if( computerMove == 'papier' && playerMove == 'nożyce'){
      printMessage('Ty wygrywasz!(gracz)');
    } else if( computerMove == 'nożyce' && playerMove == 'kamień'){
      printMessage('Ty wygrywasz!(gracz)');
    } else if( computerMove == 'kamień' && playerMove == 'nożyce'){
      printMessage('Ty wygrywasz!(komputer)');
    } else if( computerMove == 'papier' && playerMove == 'kamień'){
      printMessage('Ty wygrywasz!(komputer)');
    } else if( computerMove == 'nożyce' && playerMove == 'papier'){
      printMessage('Ty wygrywasz!(komputer)');
    } else if( computerMove == 'nożyce' && playerMove == 'nożyce'){
      printMessage('remis');
    } else if( computerMove == 'papier' && playerMove == 'papier'){
      printMessage('remis');
    } else if( computerMove == 'kamień' && playerMove == 'kamień'){
      printMessage('remis');
    } else if(playerMove > '3'){
      printMessage('zła liczba');
    } 
  */
    
}
document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
});