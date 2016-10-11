var htmlQuestion = [
  {
    question: ['What is HTML?', 'What must be in the Header?', 'How do you insert image to the body?', 'On Atom/Sublime text editor, how do you bring up Doctype HTML in index.html?', 'What is the correct order (largest to smallest) of heading relative to size?', 'Where does Javascript src go?', 'What is <p>?', 'What is the most commonly seen tag and a generic container for content?', 'What tag links us to other page?', 'What is the correct way to link HTML and Javascript main.js file from js directory?'],
    wrong: ['Hyper Text Mess Link','Hyper Tremor Message Loss','Hypo Text Mixed Language', 'script', 'body', 'div'],
    answer: ['Hyper Text Markup Language', 'title']
  },
  {
    question: 'BlahBabal?',
    options: ['a','b','c','d'],
    answer: 2,
  },
  {
    question: 'What is HTML?',
    options: ['a','b','c','d'],
    answer: 3,
  },
]


//   'What is HTML?', 'What must be in the Header?', 'How do you insert image to the body?', 'On Atom/Sublime text editor, how do you bring up Doctype HTML in index.html?', 'What is the correct order (largest to smallest) of heading relative to size?', 'Where does Javascript src go?', 'What is <p>?', 'What is the most commonly seen tag and a generic container for content?', 'What tag links us to other page?', 'What is the correct way to link HTML and Javascript main.js file from js directory?']
//   rightAnswer: ['ala']
// }


$('#startButton').on('click',function mainGame() {
  $('body').html('<div id="mainScreen"></div>');
  var $screen = $('#mainScreen');
  $screen.html('<p id="intro">It is a world of General Assembly where an adventurer goes to become the Three Weeks Master.<p>')
  $screen.append('<button id="scroll1">Next--></button>')
})

$('body').on('click','#scroll1', function next() {
  $('#scroll1').attr('id', 'scroll2')
  $('#intro').text('he or she must go through three trials of defeating the HTML, CSS and Javascript monsters');
})

$('body').on('click','#scroll2', function next() {
  $('#scroll2').attr('id', 'scroll3')
  $('#intro').text('Journey will not be an easy one.  Through the peril, there is a path to victory.  Good luck!!');
})

var wrongScore = 0

function monster() {
if(wrongScore === 1){
  console.log('Wrong! Monster has noticed you!!')
} else if (wrongScore === 2) {
  console.log('Monster has been enraged!!')
} else if (wrongScore === 3) {
  console.log('Monster took out his sharp claw from his hands')
} else if (wrongScore === 4) {
  console.log('Monster started to growl, poised right at you')
} else if (wrongScore === 5) {
  console.log('Monster charged at you, slashed your guts and ate you as a whole!')
  $('body').html('<p>YOU DIED...GAME OVER</p>')
}
}

var monsterDamage = 10
function killingMon1() {
if(monsterDamage === 9){
  console.log('Damage 1 to the monster')
} else if (monsterDamage === 8) {
  console.log('Another Damage 1 to the Monster')
} else if (monsterDamage === 7) {
  console.log('Damage 1 to monster! Monster is dazed!')
} else if (monsterDamage === 6) {
  console.log('Damage 1 to the Monster, it is weakened!')
} else if (monsterDamage === 5) {
  console.log('Damage 1 to monster, he is bleeding from his eyes')
} else if (monsterDamage === 4) {
  console.log('Damage 1 to monster, one leg is chopped off')
} else if (monsterDamage === 3) {
  console.log('Damage 1 to monster, arms are chopped off')
} else if (monsterDamage === 2) {
  console.log('Damage 1 to monster, guts are spilled out.  Monster is calling for mercy')
} else if (monsterDamage === 1) {
  console.log('Damage 1 to monster, it is about to die!')
} else if (monsterDamage === 0) {
  console.log('Monster Died!!! You are the victor!!')
}
}

//Question 1 What is HTML?
$('body').on('click','#scroll3', function next() {
  $('body').prepend('<img id="htmlMon" src="assets/green_monster" alt="HTML Monster">');
  $('body').prepend('<div id="score">Number Wrong:</div>')
  $('<div id="kill1">Monster Health:</div>').insertAfter('#htmlMon')
  $('<h3>', {html: wrongScore}).appendTo('#score')
  $('<h2>', {html: monsterDamage}).appendTo('#kill1')
  var $screen = $('#mainScreen');
  $screen.html('<div id="questions">'+htmlQuestion[0].question[0]+'</div>')
  $screen.append('<button id="wrong1">'+htmlQuestion[0].wrong[0]+'</button><button id="wrong2">'+htmlQuestion[0].wrong[1]+'</button><button id="correct">'+htmlQuestion[0].answer[0]+'</button><button id="wrong3">'+htmlQuestion[0].wrong[2]+'</button>');
})
// //Question 2 What must be in the Header?
$('body').on('click', '#correct', function() {
  $('#questions').text(htmlQuestion[0].question[1]);
  $('#wrong1').attr('id', 'correct1').text(htmlQuestion[0].answer[1])
  $('#wrong2').attr('id', 'wrong4').text(htmlQuestion[0].wrong[3])
  $('#correct').attr('id', 'wrong5').text(htmlQuestion[0].wrong[4])
  $('#wrong3').attr('id', 'wrong6').text(htmlQuestion[0].wrong[5])
  monsterDamage -= 1
  $('h2').eq(0).text(monsterDamage)
  killingMon1()
})
for(var i = 0; i < 4 )
$('body').on('click', '#wrong1', '#wrong2', function() {
  //alert later
  var $question = $('#questions');
  $question.text('What must be in the Header?');
  $('#questionnaire').html('<button class="right2">title</button><button class="wrong2">script</button><button class="wrong2">body</button><button class="wrong2">div</button>')
  wrongScore += 1
  $('h3').eq(0).text(wrongScore)
  monster()
})
// // // Question 3 Inserting Image
// $('body').on('click', '.wrong2', function() {
//   var $question = $('#questions');
//   $question.text('How do you insert image to the body?');
//   $('#questionnaire').html('<button class="wrong3">insert image</button><button class="wrong3" id="wrong31"></button><button class="right3" id="right31"></button><button class="wrong3">"copy and paste image url to the body"</button>')
//   $('#wrong31').text("<image>image</image>")
//   $('#right31').text("<img src='url'>")
//   wrongScore += 1
//   $('h3').eq(0).text(wrongScore)
//   monster()
// })
//
// $('body').on('click', '.right2', function() {
//   var $question = $('#questions');
//   $question.text('How do you insert image to the body?');
//   $('#questionnaire').html('<button class="wrong3">"insert image"</button><button class="wrong3" id="wrong31"></button><button class="right3" id="right31"></button><button class="wrong3">"copy and paste image url to the body"</button>')
//   $('#wrong31').text("<image>image</image>")
//   $('#right31').text("<img src='url'>")
//   monsterDamage -= 1
//   $('h2').eq(0).text(monsterDamage)
//   killingMon1()
// })
//
// //Question 4 On Atom/Sublime text editor, how do you bring up Doctype html in index. html?
//
// $('body').on('click', '.wrong3', function() {
//   var $question = $('#questions');
//   $question.text('On Atom/Sublime text editor, how do you bring up DOCTYPE! html in the index.html?');
//   $('#questionnaire').html('<button class="wrong4">typing html and pressing enter</button><button class="wrong4">It should just summon html by itself</button><button class="wrong4">HTML should already exit</button><button class="right4">typing html and pressing tab</button>')
//   wrongScore += 1
//   $('h3').eq(0).text(wrongScore)
//   monster();
// })
//
// $('body').on('click', '.right3', function() {
//   var $question = $('#questions');
//   $question.text('On Atom/Sublime text editor, how do you bring up DOCTYPE! html in the index.html?');
//   $('#questionnaire').html('<button class="wrong4">typing html and pressing enter</button><button class="wrong4">It should just summon html by itself</button><button class="wrong4">HTML should already exit</button><button class="right4">typing html and pressing tab</button>')
//   monsterDamage -= 1
//   $('h2').eq(0).text(monsterDamage)
//   killingMon1()
// })
//
// //Question 5
//
// $('body').on('click', '.wrong4', function() {
//   var $question = $('#questions');
//   $question.text('What the is the correct order of heading relative to size?');
//   $('#questionnaire').html('<button class="wrong5">h3,h2,h1</button><button class="right5">h1,h2,h3</button><button class="wrong5">h2,h3,h1</button><button class="wrong5">h1,h3,h2</button>')
//   wrongScore += 1
//   $('h3').eq(0).text(wrongScore)
//   monster()
// })
//
// $('body').on('click', '.right4', function() {
//
//   var $question = $('#questions');
//   $question.text('What the is the correct order of heading relative to size?');
//   $('#questionnaire').html('<button class="wrong5">h3,h2,h1</button><button class="right5">h1,h2,h3</button><button class="wrong5">h2,h3,h1</button><button class="wrong5">h1,h3,h2</button>')
//   monsterDamage -= 1
//   $('h2').eq(0).text(monsterDamage)
//   killingMon1()
// })
//
// //Question 6
//
// $('body').on('click', '.wrong5', function() {
//   var $question = $('#questions');
//   $question.text('Where does Javascript src go?');
//   $('#questionnaire').html('<button class="wrong6">beginning of body</button><button class="wrong6">beginning of header</button><button class="wrong6">end of the html page</button><button class="right6">before the end of body right</button>')
//   wrongScore += 1
//   $('h3').eq(0).text(wrongScore)
//   monster()
// })
//
// $('body').on('click', '.right5', function() {
//
//   var $question = $('#questions');
//   $question.text('What is <p>?');
//   $('#questionnaire').html('<button class="wrong6">paper</button><button class="wrong6">personal log</button><button class="right6">paragraph</button><button class="wrong6">ping</button>')
//   monsterDamage -= 1
//   $('h2').eq(0).text(monsterDamage)
//   killingMon1()
// })
//
// //Question 7
//
// $('body').on('click', '.wrong6', function() {
//   wrongScore += 1
//   $('h3').eq(0).text(wrongScore)
//   monster()
// })
//
// $('body').on('click', '.right6', function() {
//   var $question = $('#questions');
//   $question.text('What is the most commonly seen tag and a generic container for content?');
//   $('#questionnaire').html('<button class="right7"></button><button class="wrong7" id="wrong71"></button><button class="wrong7" id="wrong72"></button><button class="wrong7" id="wrong73"><span></button>')
//   $('.right7').text("<div>")
//   $('#wrong71').text("<p>")
//   $('#wrong72').text("<ul>")
//   $('#wrong73').text("<span>")
//   monsterDamage -= 1
//   $('h2').eq(0).text(monsterDamage)
//   killingMon1()
// })
//
// $('body').on('click', '.wrong7', function() {
//   wrongScore += 1
//   $('h3').eq(0).text(wrongScore)
//   monster()
// })
//
// $('body').on('click', '.right7', function() {
//   var $question = $('#questions');
//   $question.text('What tag links us to other page?');
//   $('#questionnaire').html('<button class="wrong8">link page</button><button class="wrong8">img page</button><button class="right8">a ref</button><button class="wrong8">input page</button>')
//   monsterDamage -= 1
//   $('h2').eq(0).text(monsterDamage)
//   killingMon1()
// })
//
// $('body').on('click', '.wrong8', function() {
//   wrongScore += 1
//   $('h3').eq(0).text(wrongScore)
//   monster()
// })
//
// $('body').on('click', '.right8', function() {
//   var $question = $('#questions');
//   $question.text('What is the correct way to link html and javascript main.js file from js directory?');
//   $('#questionnaire').html('<button class="wrong9">It should be already there</button><button class="right9"></button><button class="wrong9">html/script</button><button class="wrong92" id="wrong91"></button>')
//   $('.right9').text("<script type=“text/javascript” src=“js/main.js”></script>")
//   $('#wrong91').text("<script>html</script>")
//   monsterDamage -= 1
//   $('h2').eq(0).text(monsterDamage)
//   killingMon1()
// })
//
// $('body').on('click', '.wrong9', function() {
//   wrongScore += 1
//   $('h3').eq(0).text(wrongScore)
//   monster()
// })
//
// $('body').on('click', '.right9', function() {
//   monsterDamage -= 1
//   $('h2').eq(0).text(monsterDamage)
//   killingMon1()
//   $('#htmlMon').attr("src", "assets/blueMon");
//   var $question = $('#questions');
//   $question.text('test');
//   $('#questionnaire').html('<button class="wrong8">test</button><button class="test">test</button><button class="right8">test</button><button>test</button>')
// })
