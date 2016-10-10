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
  $screen.html('<div id="questions">What is HTML?</div>')
  $('body').prepend('<img id="htmlMon" src="https://www.colourbox.com/preview/6415001-3d-cartoon-green-monster.jpg" alt="HTML Monter">');
  $screen.append('<div id="questionnaire"><button id="Ques1">Hyper Text Mess Link</button> <button id="Ques2">Hyper Tremor Message Loss</button><button id="Ques3">Hyper Text Mixed Language</button><button id="Ques4">Hypo Text Mixed Language</button></div>');
})

$('body').on('click','#Ques1', function() {
  //alert later
  console.log('Wrong! Monster has noticed you!!');
  var $question = $('#questions');
  $question.text('What must be in the Header?');
  $('#Ques1').text('title')
  $('#Ques2').text('test1')//insert new answer
  $('#Ques3').text('test2')
  $('#Ques4').text('test3')
})

$('body').on('click','#Ques3', function() {
  //alert later
  console.log('damage 1 to monster');
  var $question = $('#questions');
  $question.text('What must be in the Header?');
  $('#Ques1').text('title')
  $('#Ques2').text('test1')//insert new answer
  $('#Ques3').text('test2')
  $('#Ques4').text('test3')
})
