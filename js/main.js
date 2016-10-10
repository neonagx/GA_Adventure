// var html = {
//   questions: ['What is HTML?', 'What must be in the Header?', 'How do you insert image to the body?', 'On Atom/Sublime text editor, how do you bring up Doctype HTML in index.html?', 'What is the correct order (largest to smallest) of heading relative to size?', 'Where does Javascript src go?', 'What is <p>?', 'What is the most commonly seen tag and a generic container for content?', 'What tag links us to other page?', 'What is the correct way to link HTML and Javascript main.js file from js directory?']
//   rightAnswer: ['']
// }


$('#startButton').on('click',function mainGame() {
  $('body').html('<div id="mainScreen"></div>');
  var $screen = $('#mainScreen');
  $screen.html('<p id="intro">It is a world of General Assembly where an adventurer goes to become the Three Weeks Master.<p>')
  $screen.append('<button id="scroll1">Next--></button>')
})

$('body').on('click','#scroll1', function next() {
  var $screen = $('#mainScreen');
  $screen.html('<p>he or she must go through three trials of defeating the HTML, CSS and Javascript monsters</p>');
  $screen.append('<button id="scroll2">Next--></button>')
})

$('body').on('click','#scroll2', function next() {
  var $screen = $('#mainScreen');
  $screen.html('<p>Journey will not be an easy one.  Through the peril, there is a path to victory.  Good luck!!</p>');
  $screen.append('<button id="scroll3">Next--></button>')
})

//Question 1 What is HTML?
var wrongScore = 0
if(wrongScore === 1){
  console.log('Wrong! Monster has noticed you!!')
} else if (wrongScore === 2) {
  console.log('Monster has been enraged!!')
} else if (wrongScore === 3) {
  console.log('Monster took out his sharp claw from his hands')
} else if (wrongScore === 4) {
  console.log('Monster took out his sharp claw from his hands')
}

$('body').on('click','#scroll3', function next() {
  $('body').prepend('<img id="htmlMon" src="https://www.colourbox.com/preview/6415001-3d-cartoon-green-monster.jpg" alt="HTML Monter">');
  $('body').prepend('<div id="score">Number Wrong:</div>')
  $('<h3>', {html: wrongScore}).appendTo('#score')
  var $screen = $('#mainScreen');
  $screen.html('<div id="questions">What is HTML?</div>')
  $screen.append('<div id="questionnaire"><button class="wrong1">Hyper Text Mess Link</button> <button class="wrong1">Hyper Tremor Message Loss</button><button class="right1">Hyper Text Markup Language</button><button class="wrong1">Hypo Text Mixed Language</button></div>');
})
// //Question 2 What must be in the Header?
$('body').on('click', '.wrong1', function() {
  wrongScore +=1
  console.log('Wrong! Monster has noticed you!!');
  var $question = $('#questions');
  $question.text('What must be in the Header?');
  $('#questionnaire').html('<button class="right2">"title"</button><button class="wrong2">"script"</button><button class="wrong2">"body"</button><button class="right2">"div"</button>')
})

$('body').on('click', '.right1', function() {
  //alert later
  console.log('Damage 1 to the monster');
  var $question = $('#questions');
  $question.text('What must be in the Header?');
  $('#questionnaire').html('<button class="right2">title</button><button class="wrong2">script</button><button class="wrong2">body</button><button class="wrong2">div</button>')
})
// // Question 3 Inserting Image
$('body').on('click', '.wrong2', function() {
  console.log('Monster has been enraged!!');
  var $question = $('#questions');
  $question.text('How do you insert image to the body?');
  $('#questionnaire').html('<button class="wrong3">insert image</button><button class="wrong3" id="wrong31"></button><button class="right3" id="right31"></button><button class="wrong3">"copy and paste image url to the body"</button>')
  $('#wrong31').text("<image>image</image>")
  $('#right31').text("<img src='url'>")
})

$('body').on('click', '.right2', function() {
  console.log('Another Damage 1 to the Monster');
  var $question = $('#questions');
  $question.text('How do you insert image to the body?');
  $('#questionnaire').html('<button class="wrong3">"insert image"</button><button class="wrong3" id="wrong31"></button><button class="right3" id="right31"></button><button class="wrong3">"copy and paste image url to the body"</button>')
  $('#wrong31').text("<image>image</image>")
  $('#right31').text("<img src='url'>")
})

//Question 4 On Atom/Sublime text editor, how do you bring up Doctype html in index. html?

$('body').on('click', '.wrong3', function() {
  console.log('Monster took out his sharp claw from his hands');
  var $question = $('#questions');
  $question.text('On Atom/Sublime text editor, how do you bring up DOCTYPE! html in the index.html?');
  $('#questionnaire').html('<button class="wrong4">typing html and pressing enter</button><button class="wrong4">It should just summon html by itself</button><button class="wrong4">HTML should already exit</button><button class="right4">typing html and pressing tab</button>')
})

$('body').on('click', '.right3', function() {
  console.log('Damage 1 to monster! Monster is dazed!');
  var $question = $('#questions');
  $question.text('On Atom/Sublime text editor, how do you bring up DOCTYPE! html in the index.html?');
  $('#questionnaire').html('<button class="wrong4">typing html and pressing enter</button><button class="wrong4">It should just summon html by itself</button><button class="wrong4">HTML should already exit</button><button class="right4">typing html and pressing tab</button>')
})

//Question 5

$('body').on('click', '.wrong4', function() {
  console.log('Monster started to growl, poised right at you');
  var $question = $('#questions');
  $question.text('What the is the correct order of heading relative to size?');
  $('#questionnaire').html('<button class="wrong5">h3,h2,h1</button><button class="right5">h1,h2,h3</button><button class="wrong5">h2,h3,h1</button><button class="wrong5">h1,h3,h2</button>')
})

$('body').on('click', '.right4', function() {
  console.log('Damage 1 to the Monster, it is weakened!');
  var $question = $('#questions');
  $question.text('What the is the correct order of heading relative to size?');
  $('#questionnaire').html('<button class="wrong5">h3,h2,h1</button><button class="right5">h1,h2,h3</button><button class="wrong5">h2,h3,h1</button><button class="wrong5">h1,h3,h2</button>')
})

//Question 6

$('body').on('click', '.wrong5', function() {
  console.log('Monster charged at you, slashed your guts and ate you as a whole!');
  var $question = $('#questions');
  $question.text('Where does Javascript src go?');
  $('#questionnaire').html('<button class="wrong6">beginning of body</button><button class="wrong6">beginning of header</button><button class="wrong6">end of the html page</button><button class="right6">before the end of body right</button>')
})

$('body').on('click', '.right5', function() {
  console.log('Damage 1 to monster, he is bleeding from his eyes');
  var $question = $('#questions');
  $question.text('Where does Javascript src go?');
  $('#questionnaire').html('<button class="wrong6">beginning of body</button><button class="wrong6">beginning of header</button><button class="wrong6">end of the html page</button><button class="right6">before the end of body right</button>')
})

//Question 7

$('body').on('click', '.right6', function() {
  console.log('Damage 1 to monster, he is bleeding from his eyes');
  var $question = $('#questions');
  $question.text('Where does Javascript src go?');
  $('#questionnaire').html('<button class="wrong7">beginning of body</button><button class="wrong7">beginning of header</button><button class="right7">end of the html page</button><button class="wrong7">before the end of body right</button>')
})
