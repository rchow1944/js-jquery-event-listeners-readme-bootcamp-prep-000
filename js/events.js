//define functions here
function getIt(){
  $('p').on('click', function(){
    alert('Hey!');
  });
  return;
}

function frameIt(){
  $('img').on('load', function(){
    $('img').addClass('tasty');
  })
  return;
}

function pressIt() {
  $('input').on('keydown', function() {
    
  }) 
}

$(document).ready(function(){

// call functions here
  getIt();
  frameIt();
});
