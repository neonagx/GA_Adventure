$('button').on('click',function mainGame() {
  $('body').html('<div id="mainScreen"></div>');
  var $screen = $('#mainScreen');
  $screen.html('<p id="intro">It is a world of General Assembly where an adventurer goes to become the Three Weeks Master.<p>')
  $screen.append('<button id="scroll1">Next --></button>')
})

$('body').on('click','#scroll1', function next() {
  var $screen = $('#mainScreen');
  $screen.html('<p>he or she must go through three trials of defeating the HTML, CSS and Javascript monsters</p>');
  $screen.append('<button id="scroll2">Next--></button>')
})

$('body').on('click','#scroll2', function next() {
  var $screen = $('#mainScreen');
  $screen.html('<p>Journey will not be an easy one.  Through the peril there a path to victory.  Good luck!!</p>');
  $screen.append('<button id="scroll3">Next--></button>')
})

//Question 1 What is HTML?
$('body').on('click','#scroll3', function next() {
  var $screen = $('#mainScreen');
  $screen.html('<div id="questions">What is HTML?</div>')
  $('body').prepend('<img id="htmlMon" src="https://www.colourbox.com/preview/6415001-3d-cartoon-green-monster.jpg" alt="HTML Monter">');
  $screen.append('<div id="questionnaire"><button class="wrong1">Hyper Text Mess Link</button> <button class="wrong1">Hyper Tremor Message Loss</button><button class="right1">Hyper Text Markup Language</button><button class="wrong1">Hypo Text Mixed Language</button></div>');
})
//Question 2 What must be in the Header?
$('body').on('click', '.wrong1', function() {
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
