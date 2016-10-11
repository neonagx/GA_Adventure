var htmlQuestion = [
  {
    question: 'What is HTML?',
    choices: ['Hyper Text Mess Link','Hyper Tremor Message Loss','Hyper Text Markup Language','Hypo Text Mixed Language'],
    answer: 'Hyper Text Markup Language'
  },
  {
    question: 'What must be in the Header?',
    choices: ['title', 'script', 'body', 'div'],
    answer: 'title'
  },
  {
    question: 'How do you insert image to the body?',
    choices: ['insert image','<image>image</image>','<img src="url">','copy and paste image url'],
    answer: '<img src="url">'
  },
  {
    question: 'What is the correct order (largest to smallest) of heading relative to size?',
    choices: ['h3,h2,h1','h1,h2,h3','h2,h3,h1','h1,h3,h2'],
    answer: 'h1,h2,h3'
  },
  {
    question: 'On Atom/Sublime text editor, how do you bring up Doctype HTML in index.html?',
    choices: ['typing html and pressing enter','It should just summon html by itself','HTML should already exit','typing html and pressing tab'],
    answer: 'typing html and pressing tab'
  },
  {
    question: 'Where does Javascript src go?',
    choices: ['beginning of body','beginning of header','end of the html page','before the end of body'],
    answer: 'before the end of body'
  },
  {
    question: 'What is "<p>"?',
    choices: ['paper','personal log','paragraph','ping'],
    answer: 'paragraph'
  },
  {
    question: 'What is the most commonly seen tag and a generic container for content?',
    choices: ['<div>','<p>','<ul>','<span>'],
    answer: '<div>'
  },
  {
    question: 'What tag links us to other page?',
    choices: ['link page','img page','a ref','input page'],
    answer: 'a ref'
  },
  {
    question: 'What is the correct way to link HTML and Javascript main.js file from js directory?',
    choices: ['It should be already there','<script type=“text/javascript” src=“js/main.js”></script>','html/script','<script>html</script>'],
    answer: '<script type=“text/javascript” src=“js/main.js”></script>'
  }
]

var cssQuestion = [
  {
    question: 'What is CSS?',
    choices: ['Cascading Style Sub','Card Sheer Sheet','Common Style Sheet','Cascading Style Sheet'],
    answer: 'Cascading Style Sheet'
  },
  {
    question: 'How do you make css on atom?',
    choices: ['make a directory and put css', 'just put style.css on html', 'Make a directory and touch style.css', 'It should be already there'],
    answer: 'Make a directory and touch style.css'
  },
  {
    question: 'What are three different ways to use CSS to style HTML?',
    choices: ['Insert Sheet, Input Sheet, Style Sheet','External style sheet, Eternal style sheet, Intra style sheet', 'Eternal style sheet, Intra style sheet, Insert style','Extra style sheet, Idra style sheet, Info style'],
    answer: 'External style sheet, internal style sheet, Inline style'
  },
  {
    question: 'How do you link style.css to html?',
    choices: ['link.style.css','html=link style.css','<link rel=“stylesheet” href=“css/style.css”>','<link rel=“stylesheet” “css/style.css”>'],
    answer: '<link rel=“stylesheet” href=“css/style.css”>'
  },
  {
    question: 'What is never used in CSS?',
    choices: ['Inline style, internal style','External style sheet, inline style','External style, Internal style sheet','Indy style, Inline style'],
    answer: 'Inline style, internal style'
  },
  {
    question: 'How do you change the background color of the body?',
    choices: ['body{ background: red; }','body{ red; }','color: red;','body{ background = red; }'],
    answer: 'body{ background: red; }'
  },
  {
    question: 'How do you select a class with “oneLine” in CSS?',
    choices: ['#oneLine','class oneLine','.oneLine','Just select it'],
    answer: '.oneLine'
  },
  {
    question: 'How do you select an ID with “twoLine” in CSS?',
    choices: ['.twoLine','#twoLine','id twoLine','Just like class, just select it'],
    answer: '#twoLine'
  },
  {
    question: 'What is way to center text?',
    choices: ['Center','It is always centered','text-center','margin: 0 auto'],
    answer: 'margin: 0 auto'
  },
  {
    question: 'What is the most specific selector?',
    choices: ['style attribute','elements','class, pseudo class','ID'],
    answer: 'ID'
  }
]
  var javascriptQuestion = [
    {
      question: 'What is the five primitive types of Javascript?',
      choices: ['String, number, boolean, null, undefined','String, name, boolean, nell, defined','Straw, number, boolean, null, undefined','String, name, bolean, null, undenied'],
      answer: 'String, number, boolean, null, undefined'
    },
    {
      question: 'What does .length do?',
      choices: ['Shows you length of length', 'Shows you length of a period', 'Shows you length of a string or array', 'Shows you length of empty space'],
      answer: 'Shows you length of a string or array'
    },
    {
      question: 'What is array?',
      choices: ['It is an light','A container of data, similar to the list', 'A beam of data','Scientific term of data'],
      answer: 'A container of data, similar to the list'
    },
    {
      question: 'What are the two loops in Javascript?',
      choices: ['link.style.css','html=link style.css','<link rel=“stylesheet” href=“css/style.css”>','<link rel=“stylesheet” “css/style.css”>'],
      answer: '<link rel=“stylesheet” href=“css/style.css”>'
    },
    {
      question: 'What is never used in CSS?',
      choices: ['Loop and loops','Loop 1 and loop 2','While loop, for loop','While, for'],
      answer: 'While, for'
    },
    {
      question: 'What must you do to insert a string in var a = [3, 4] and set array of a into var b?',
      choices: ['var b = var a.push(“string”)','var b = a.push(“string”)','var a = a.push(“string”)','var b = a.push(“strong”)'],
      answer: 'var b = a.push(“string”)'
    },
    {
      question: 'What would return true?',
      choices: ['var a = [“UCLA”, “USC”], var b = [“UCLA”, “USC”], var a === var b','var a = {name: “Godzilla”}, var b = {name: “Godzilla”}, var a === var b ','true === false','“hello” === ‘hello’'],
      answer: '“hello” === ‘hello’'
    },
    {
      question: 'What is correct way to use object constructor?',
      choices: ['var new = {};','var new = object new {};','var new = object', 'var new = new Object();'],
      answer: 'var new = new Object();'
    },
    {
      question: 'How do you reassign var Person = {name: “Phil”} with name “Dona”?',
      choices: ['name = “Dona”','person.name = “Dona”','Person.name = “Dona”','Just put “Dona” as a person name'],
      answer: 'Person.name = “Dona”'
    },
    {
      question: 'What is the answer to a function declaration,  multiplyArray that takes array of numbers and returns the product those numbers. For example, multiplyArray([2,4,5]); would return 40?',
      choices: ['function multiplyArray(arr) { var product = 1; for (var i = 0; i < arr.length; i++) { product *= arr[i]; } return product; }','function multiplyArray() { var product = 1; { product *= arr[i]; } return product; }','function multiplyArray(arr) { for (var i = 0; i < arr.length; i++) { product *= arr[i]; } return product; }','function multiplyArray(arr) { var product = 1; for (var i = 0; i < arr.length; i++) { product *= arr[i]; } }'],
      answer: 'function multiplyArray() { var product = 1; { product *= arr[i]; } return product; }'
    }
]


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

var currentQuestion = htmlQuestion.splice(Math.floor(Math.random() * htmlQuestion.length), 1);
var selectQuestion = currentQuestion[0].question;
var selectChoice1 = currentQuestion[0].choices[0];
var selectChoice2 = currentQuestion[0].choices[1];
var selectChoice3 = currentQuestion[0].choices[2];
var selectChoice4 = currentQuestion[0].choices[3];
var answerChoice = currentQuestion[0].answer;


$('body').on('click','#scroll3', function next() {
  $('body').prepend('<img id="htmlMon" src="assets/green_monster" alt="HTML Monster">');
  $('body').prepend('<div id="score">Number Wrong:</div>')
  $('<div id="kill1">Monster Health:</div>').insertAfter('#htmlMon')
  $('<h3>', {html: wrongScore}).appendTo('#score')
  $('<h2>', {html: monsterDamage}).appendTo('#kill1')
  var $screen = $('#mainScreen');
  $screen.html('<div id="questions">'+selectQuestion+'</div>');
  $screen.append('<button id="choice1">'+selectChoice1+'</button><button id="choice2">'+selectChoice2+'</button><button id="choice3">'+selectChoice3+'</button><button id="choice4">'+selectChoice4+'</button>');
  $('button').on('click', function(){
    if($(this).text() === answerChoice){
      monsterDamage -= 1
      $('h2').eq(0).text(monsterDamage)
      killingMon1()
    } else {
      wrongScore += 1;
      $('h3').eq(0).text(wrongScore);
      monster();
    }
    var currentQuestion = htmlQuestion.splice(Math.floor(Math.random() * htmlQuestion.length), 1);
    var selectQuestion = currentQuestion[0].question;
    var selectChoice1 = currentQuestion[0].choices[0];
    var selectChoice2 = currentQuestion[0].choices[1];
    var selectChoice3 = currentQuestion[0].choices[2];
    var selectChoice4 = currentQuestion[0].choices[3];
    var answerChoice = currentQuestion[0].answer;
    $('#questions').text(selectQuestion);
    $('#choice1').text(selectChoice1);
    $('#choice2').text(selectChoice2);
    $('#choice3').text(selectChoice3);
    $('#choice4').text(selectChoice4);
  })

})


    // if($('.choice').find(currentQuestion[0].answer) == currentQuestion[0].answer) {
    // } else {
    //   wrongScore += 1;
    //   $('h3').eq(0).text(wrongScore);
    //   monster();
    // }
  // })
//   $screen.html('<div id="questions">'+currentQuestion+'</div>')
//   $screen.append('<button id="wrong1">'+htmlQuestion[0].wrong[0]+'</button><button id="wrong2">'+htmlQuestion[0].wrong[1]+'</button><button id="correct">'+htmlQuestion[0].answer[0]+'</button><button id="wrong3">'+htmlQuestion[0].wrong[2]+'</button>');
//   $('#correct').on('click', function() {
//     $('#questions').text(htmlQuestion[0].question[1]);
//     $('#wrong1').attr('id', 'correct1').text(htmlQuestion[0].answer[1])
//     $('#wrong2').attr('id', 'wrong4').text(htmlQuestion[0].wrong[3])
//     $('#correct').attr('id', 'wrong5').text(htmlQuestion[0].wrong[4])
//     $('#wrong3').attr('id', 'wrong6').text(htmlQuestion[0].wrong[5])
//     monsterDamage -= 1
//     $('h2').eq(0).text(monsterDamage)
//     killingMon1()
//   })
// })
// // //Question 2 What must be in the Header?
//
// $('body').on('click', '#wrong1', function() {
//   //alert later
//   var $question = $('#questions');
//   $question.text('What must be in the Header?');
//   $('#questionnaire').html('<button class="right2">title</button><button class="wrong2">script</button><button class="wrong2">body</button><button class="wrong2">div</button>')
//   wrongScore += 1
//   $('h3').eq(0).text(wrongScore)
//   monster()
// })
// // // // Question 3 Inserting Image
// // $('body').on('click', '.wrong2', function() {
// //   var $question = $('#questions');
// //   $question.text('How do you insert image to the body?');
// //   $('#questionnaire').html('<button class="wrong3">insert image</button><button class="wrong3" id="wrong31"></button><button class="right3" id="right31"></button><button class="wrong3">"copy and paste image url to the body"</button>')
// //   $('#wrong31').text("<image>image</image>")
// //   $('#right31').text("<img src='url'>")
// //   wrongScore += 1
// //   $('h3').eq(0).text(wrongScore)
// //   monster()
// // })
// //
// // $('body').on('click', '.right2', function() {
// //   var $question = $('#questions');
// //   $question.text('How do you insert image to the body?');
// //   $('#questionnaire').html('<button class="wrong3">"insert image"</button><button class="wrong3" id="wrong31"></button><button class="right3" id="right31"></button><button class="wrong3">"copy and paste image url to the body"</button>')
// //   $('#wrong31').text("<image>image</image>")
// //   $('#right31').text("<img src='url'>")
// //   monsterDamage -= 1
// //   $('h2').eq(0).text(monsterDamage)
// //   killingMon1()
// // })
// //
// // //Question 4 On Atom/Sublime text editor, how do you bring up Doctype html in index. html?
// //
// // $('body').on('click', '.wrong3', function() {
// //   var $question = $('#questions');
// //   $question.text('On Atom/Sublime text editor, how do you bring up DOCTYPE! html in the index.html?');
// //   $('#questionnaire').html('<button class="wrong4">typing html and pressing enter</button><button class="wrong4">It should just summon html by itself</button><button class="wrong4">HTML should already exit</button><button class="right4">typing html and pressing tab</button>')
// //   wrongScore += 1
// //   $('h3').eq(0).text(wrongScore)
// //   monster();
// // })
// //
// // $('body').on('click', '.right3', function() {
// //   var $question = $('#questions');
// //   $question.text('On Atom/Sublime text editor, how do you bring up DOCTYPE! html in the index.html?');
// //   $('#questionnaire').html('<button class="wrong4">typing html and pressing enter</button><button class="wrong4">It should just summon html by itself</button><button class="wrong4">HTML should already exit</button><button class="right4">typing html and pressing tab</button>')
// //   monsterDamage -= 1
// //   $('h2').eq(0).text(monsterDamage)
// //   killingMon1()
// // })
// //
// // //Question 5
// //
// // $('body').on('click', '.wrong4', function() {
// //   var $question = $('#questions');
// //   $question.text('What the is the correct order of heading relative to size?');
// //   $('#questionnaire').html('<button class="wrong5">h3,h2,h1</button><button class="right5">h1,h2,h3</button><button class="wrong5">h2,h3,h1</button><button class="wrong5">h1,h3,h2</button>')
// //   wrongScore += 1
// //   $('h3').eq(0).text(wrongScore)
// //   monster()
// // })
// //
// // $('body').on('click', '.right4', function() {
// //
// //   var $question = $('#questions');
// //   $question.text('What the is the correct order of heading relative to size?');
// //   $('#questionnaire').html('<button class="wrong5">h3,h2,h1</button><button class="right5">h1,h2,h3</button><button class="wrong5">h2,h3,h1</button><button class="wrong5">h1,h3,h2</button>')
// //   monsterDamage -= 1
// //   $('h2').eq(0).text(monsterDamage)
// //   killingMon1()
// // })
// //
// // //Question 6
// //
// // $('body').on('click', '.wrong5', function() {
// //   var $question = $('#questions');
// //   $question.text('Where does Javascript src go?');
// //   $('#questionnaire').html('<button class="wrong6">beginning of body</button><button class="wrong6">beginning of header</button><button class="wrong6">end of the html page</button><button class="right6">before the end of body right</button>')
// //   wrongScore += 1
// //   $('h3').eq(0).text(wrongScore)
// //   monster()
// // })
// //
// // $('body').on('click', '.right5', function() {
// //
// //   var $question = $('#questions');
// //   $question.text('What is <p>?');
// //   $('#questionnaire').html('<button class="wrong6">paper</button><button class="wrong6">personal log</button><button class="right6">paragraph</button><button class="wrong6">ping</button>')
// //   monsterDamage -= 1
// //   $('h2').eq(0).text(monsterDamage)
// //   killingMon1()
// // })
// //
// // //Question 7
// //
// // $('body').on('click', '.wrong6', function() {
// //   wrongScore += 1
// //   $('h3').eq(0).text(wrongScore)
// //   monster()
// // })
// //
// // $('body').on('click', '.right6', function() {
// //   var $question = $('#questions');
// //   $question.text('What is the most commonly seen tag and a generic container for content?');
// //   $('#questionnaire').html('<button class="right7"></button><button class="wrong7" id="wrong71"></button><button class="wrong7" id="wrong72"></button><button class="wrong7" id="wrong73"><span></button>')
// //   $('.right7').text("<div>")
// //   $('#wrong71').text("<p>")
// //   $('#wrong72').text("<ul>")
// //   $('#wrong73').text("<span>")
// //   monsterDamage -= 1
// //   $('h2').eq(0).text(monsterDamage)
// //   killingMon1()
// // })
// //
// // $('body').on('click', '.wrong7', function() {
// //   wrongScore += 1
// //   $('h3').eq(0).text(wrongScore)
// //   monster()
// // })
// //
// // $('body').on('click', '.right7', function() {
// //   var $question = $('#questions');
// //   $question.text('What tag links us to other page?');
// //   $('#questionnaire').html('<button class="wrong8">link page</button><button class="wrong8">img page</button><button class="right8">a ref</button><button class="wrong8">input page</button>')
// //   monsterDamage -= 1
// //   $('h2').eq(0).text(monsterDamage)
// //   killingMon1()
// // })
// //
// // $('body').on('click', '.wrong8', function() {
// //   wrongScore += 1
// //   $('h3').eq(0).text(wrongScore)
// //   monster()
// // })
// //
// // $('body').on('click', '.right8', function() {
// //   var $question = $('#questions');
// //   $question.text('What is the correct way to link html and javascript main.js file from js directory?');
// //   $('#questionnaire').html('<button class="wrong9">It should be already there</button><button class="right9"></button><button class="wrong9">html/script</button><button class="wrong92" id="wrong91"></button>')
// //   $('.right9').text("<script type=“text/javascript” src=“js/main.js”></script>")
// //   $('#wrong91').text("<script>html</script>")
// //   monsterDamage -= 1
// //   $('h2').eq(0).text(monsterDamage)
// //   killingMon1()
// // })
// //
// // $('body').on('click', '.wrong9', function() {
// //   wrongScore += 1
// //   $('h3').eq(0).text(wrongScore)
// //   monster()
// // })
// //
// $('body').on('click', '.right9', function() {
//   monsterDamage -= 1
//   $('h2').eq(0).text(monsterDamage)
//   killingMon1()
//   $('#htmlMon').attr("src", "assets/blueMon");
//   var $question = $('#questions');
//   $question.text('test');
//   $('#questionnaire').html('<button class="wrong8">test</button><button class="test">test</button><button class="right8">test</button><button>test</button>')
// })
