/*comments */
//♪┏(°.°)┛┗(°.°)┓┗(°.°)┛┏(°.°)┓ ♪

/* 
If the user's first mane is 'General and the last name
is NOT 'Assembly', then greet the general 
*/

function askQuestions() {

var firstName = prompt('What is your first name?')
var lastName = prompt('What is your last name?')
var fullName = firstName + ' ' + lastName;
console.log('User is called' + firstName === 'General' && lastName !=='Assembly');

$('h2').text('What up ' + firstName + ' ' + lastName +'!')

var userAge = prompt('How old are you?');
userAge = parseInt(userAge);

if (firstName == 'General' && lastName !='Assembly') {
	console.log('Hello General!');
}
} 

// When the page loads
$(function(){

	$('img').on('click', askQuestions);
	
	// Hide all the sections
	$('h3').next().hide();

	// When the user clicks an h3 element
	$('h3').on('click', function(){

		// Hide the next element
		$(this).next().slideToggle(200);
	});

});