$('button').on('click',function mainGame() {
  $('body').html('<div id="mainScreen"></div>');
  var $screen = $('#mainScreen');
  $screen.html('<p>It is a world of General Assembly where an adventurer goes to become the Three Weeks Master.<p>')
  $screen.append('<button id="scroll1">Next --></button>')
})

$('body').on('click','#scroll1', function next() {
  var $screen = $('#mainScreen');
  $screen.html('<p>he or she must go through three trials of defeating the HTML, CSS and Javascript monsters</p>');
  $screen.append('<button id="scroll2">Next--></button>')
})

$('body').on('click','#scroll2', function next() {
  var $screen = $('#mainScreen');
  $screen.html('<div id="question1">What is HTML?</div>')
  $('body').prepend('<img id="htmlMon" src="https://www.colourbox.com/preview/6415001-3d-cartoon-green-monster.jpg" alt="HTML Monter">');
  $screen.append('<div id="questionnaire"><button id="Ques1">Hyper Text Mess Link</button> <button id="Ques2">Hyper Tremor Message Loss</button><button id="Ques3">Hyper Text Mixed Language</button><button id="Ques4">Hypo Text Mixed Language</button></div>');
})

$('body').on('click','#Ques1', function() {
  //alert later
  console.log('Wrong! Monster has noticed you!!');
  var $screen = $('#mainScreen');
  $screen.append('<div id="question2">What must be in the header?</div>');
  $screen.html('<div id="questionnaire"><button id="Ques1">dunno</button> <button id="Ques2">What</button><button id="Ques3">three</button><button id="Ques4">title</button></div>');
})

$('body').on('click','#Ques2', function() {
  //alert later
  console.log('You are correct!! Damage 1 to the monster!');
  var $screen = $('#mainScreen');
  $screen.html('<div id="question2">What must be in the header?</div>');
  $screen.html('<div id="questionnaire"><button id="Ques1">dunno</button> <button id="Ques2">What</button><button id="Ques3">three</button><button id="Ques4">title</button></div>');
})

$('body').on('click','#Ques3', function() {
  //alert later
  console.log('Wrong! Monster has noticed you!!');
  var $screen = $('#mainScreen');
  $screen.html('<div id="question2">What must be in the header?</div>');
  $screen.html('<div id="questionnaire"><button id="Ques1">dunno</button> <button id="Ques2">What</button><button id="Ques3">three</button><button id="Ques4">title</button></div>');
})

$('body').on('click','#Ques4', function() {
  //alert later
  console.log('Wrong! Monster has noticed you!!');
  var $screen = $('#mainScreen');
  $screen.html('<div id="question2">What must be in the header?</div>');
  $screen.html('<div id="questionnaire"><button id="Ques1">dunno</button> <button id="Ques2">What</button><button id="Ques3">three</button><button id="Ques4">title</button></div>');
})
