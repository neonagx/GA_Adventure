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
  $screen.html('<img src="https://www.colourbox.com/preview/6415001-3d-cartoon-green-monster.jpg" alt="HTML Monter">');
  $screen.html('<div id="question1">What is HTML?</div>')
  $screen.append('<button id="Ques1">Next--></button>', '<button id="Ques2">Next--></button>', '<button id="Ques3">Next--></button>','<button id="Ques4">Next--></button>')
})
