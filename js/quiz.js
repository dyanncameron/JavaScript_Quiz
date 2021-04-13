var score = 0; //Set score to 0
var total = 10; //Total number of questions
var point = 2; //Points per correct answer
var highest = total * point;

function clickedButton(){
	var name = document.form.iname.value;
    if(name==""){
        alert("enter your name"); //validate the input name is correctly inserted
         }
		}
//some jQuery Syntax
//Initializer
function init(){
	//set correct answers
	sessionStorage.setItem('a1','c');
	sessionStorage.setItem('a2','c');
	sessionStorage.setItem('a3','b');
	sessionStorage.setItem('a4','b');
	sessionStorage.setItem('a5','b');
    sessionStorage.setItem('a6','a');
    sessionStorage.setItem('a7','b');
    sessionStorage.setItem('a8','c');
    sessionStorage.setItem('a9','c');
    sessionStorage.setItem('a10','c');
}

$(document).ready(function(){
	//Hide all questions
	$('.questionForm').hide();
	
	//Show first question
	$('#q1').show();
	
	$('.questionForm #submit').click(function(){
		//Get data attributes
		current = $(this).parents('form:first').data('question');
		next = $(this).parents('form:first').data('question')+1;
		//Hide all questions
		$('.questionForm').hide();
		//Show next question
		$('#q'+next+'').fadeIn(300);
		process(''+current+'');
		return false;
	});
});


//Process the answers
function process(n){
	//Get input value
	var submitted = $('input[name=q'+n+']:checked').val();
	if(!submitted) {   
		alert('Oh No! Please select your answer!'); //when you forgot to choose answer
		return (currentQuestion);
	
	}if(submitted == sessionStorage.getItem('a'+n+'')){
		score = score + point;		
	
	}  	
	if(n == total){	// to process your score										//to redirect you from the start
		$('#results').html('<h3>Your final score is: '+score+' out of '+highest+'</h3><a href="index.html">Retry Quiz Again</a>');
		if(score<="20" && score >= "18"){
			$('#results').append('<p>Well Done! Congratulations! 🎉');
		} if(score<="16" && score >= "8"){ //when you score not below 1points
			$('#results').append('<p>Good Job! 😎');
		} if(score<="8"){ //when your score is below 6
			$('#results').append('<p>Sorry Maybe Retry again? 😐');
	}
}
	return false;
}


//Add event listener
window.addEventListener('load',init,false);