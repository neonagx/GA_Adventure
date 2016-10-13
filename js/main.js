$(document).ready(function(){
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
    answer: 'typing html and pressing enter'
  },
  {
    question: 'Where does Javascript src go?',
    choices: ['beginning of body','beginning of header','end of the html page','before the end of body'],
    answer: 'before the end of body'
  },
  {
    question: 'What is " < p > "?',
    choices: ['paper','personal log','paragraph','ping'],
    answer: 'paragraph'
  },
  {
    question: 'What is the most commonly seen tag and a generic container for content?',
    choices: ['" < div > "','"< p >"','"< ul >"','" < span > "'],
    answer: '" < div > "'
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
    choices: ['External style sheet, internal style sheet, Inline style','External style sheet, Eternal style sheet, Intra style sheet', 'Eternal style sheet, Intra style sheet, Insert style','Extra style sheet, Idra style sheet, Info style'],
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
  $('body').css('background-image', 'url(assets/general_assembly.jpeg)')
  $('body').html('<div id="mainScreen"></div>');
  $('body').append('<audio controls loop autoplay="source"><source src="./assets/pocket-garden.wav" type="audio/wav"></audio>')
  var $screen = $('#mainScreen');
  $screen.html('<p id="intro">Enter the World of General Assembly.  An adventurer goes to learn the art of code and become the Code Master.<p>')
  $screen.append('<button id="scroll1">Next &rarr;</button>')
})

$('body').on('click','#scroll1', function next() {
  $('#scroll1').attr('id', 'scroll2')
  $('#intro').text('One must defeat the HTML, CSS and Javascript monsters using knowledge of the code.  You will earn the title of Three Weeks Master.');
})

$('body').on('click','#scroll2', function next() {
  $('#scroll2').attr('id', 'scroll3')
  $('#intro').text('Journey will not be an easy one. Good luck!!');
})

var stageLevel = 1
var wrongScore = 0
var monsterDamage = 10

function monster() {
if(wrongScore === 1){
  alert('Wrong! Monster has noticed you!!')
} else if (wrongScore === 2) {
  alert('Monster has been enraged!!')
} else if (wrongScore === 3) {
  alert('Monster took out his sharp claw from his hands')
} else if (wrongScore === 4) {
  alert('Monster started to growl, poised right at you')
} else if (wrongScore === 5) {
  alert('Monster charged at you, slashed your guts and ate you as a whole!')
  $('body').html('<p class="over">YOU            DIED..   GAME OVER</p>')
  $('body').append('<audio controls loop autoplay="source"><source src="./assets/game_over.wav" type="audio/wav"></audio>')
}
}

function killingMon1() {
  if(monsterDamage === 9){
    $('body').append('<audio id="echo" autoplay="source"><source src="./assets/firstMonroar.wav" type="audio/wav"></audio>')
    setTimeout(function(){$('audio').remove("#echo"); }, 1000);
    setTimeout(function(){ alert("Damage 1 to the monster"); }, 500);
  } else if (monsterDamage === 8) {
    $('body').append('<audio id="echo" autoplay="source"><source src="./assets/firstMonroar.wav" type="audio/wav"></audio>')
    setTimeout(function(){$('audio').remove("#echo"); }, 1000);
    setTimeout(function(){ alert('Another Damage 1 to the Monster'); }, 500);
  } else if (monsterDamage === 7) {
    $('body').append('<audio id="echo" autoplay="source"><source src="./assets/firstMonroar.wav" type="audio/wav"></audio>')
    setTimeout(function(){$('audio').remove("#echo"); }, 1000);
    setTimeout(function(){ alert('Damage 1 to the monster! Monster is dazed!'); }, 500);
  } else if (monsterDamage === 6) {
    $('body').append('<audio id="echo" autoplay="source"><source src="./assets/firstMonroar.wav" type="audio/wav"></audio>')
    setTimeout(function(){$('audio').remove("#echo"); }, 1000);
    setTimeout(function(){ alert('Damage 1 to the monster! it is weakened'); }, 500);
  } else if (monsterDamage === 5) {
    $('body').append('<audio id="echo" autoplay="source"><source src="./assets/firstMonroar.wav" type="audio/wav"></audio>')
    setTimeout(function(){$('audio').remove("#echo"); }, 1000);
    setTimeout(function(){ alert('Damage 1 to the monster! he is bleeding from his eyes'); }, 500);
  } else if (monsterDamage === 4) {
    $('body').append('<audio id="echo" autoplay="source"><source src="./assets/firstMonroar.wav" type="audio/wav"></audio>')
    setTimeout(function(){$('audio').remove("#echo"); }, 1000);
    setTimeout(function(){ alert('Damage 1 to the monster! One leg is chopped off!'); }, 500);
  } else if (monsterDamage === 3) {
    $('body').append('<audio id="echo" autoplay="source"><source src="./assets/firstMonroar.wav" type="audio/wav"></audio>')
    setTimeout(function(){$('audio').remove("#echo"); }, 1000);
    setTimeout(function(){ alert('Damage 1 to the monster! Arms are chopped off!'); }, 500);
  } else if (monsterDamage === 2) {
    $('body').append('<audio id="echo" autoplay="source"><source src="./assets/firstMonroar.wav" type="audio/wav"></audio>')
    setTimeout(function(){$('audio').remove("#echo"); }, 1000);
    setTimeout(function(){ alert('Damage 1 to the monster! guts are spilled out.  Monster is calling for mercy!'); }, 500);
  } else if (monsterDamage === 1) {
    $('body').append('<audio id="echo" autoplay="source"><source src="./assets/firstMonroar.wav" type="audio/wav"></audio>')
    setTimeout(function(){$('audio').remove("#echo"); }, 1000);
    setTimeout(function(){ alert('Damage 1 to the monster! It is about to die!!'); }, 500);
  } else if (monsterDamage === 0) {
    alert('Monster Died!!! You are the victor!!')
  }
}

var currentQuestion = htmlQuestion.splice(Math.floor(Math.random() * htmlQuestion.length), 1);
var selectQuestion = currentQuestion[0].question;
var selectChoice1 = currentQuestion[0].choices[0];
var selectChoice2 = currentQuestion[0].choices[1];
var selectChoice3 = currentQuestion[0].choices[2];
var selectChoice4 = currentQuestion[0].choices[3];
var answerChoice = currentQuestion[0].answer;

function alertCss(){
  alert("Monster ran away from fear! You won this stage!")
  alert("Next up CSS! CSS Monster Approaches!!")
}


function cssMon(){
  currentQuestion = cssQuestion.splice(Math.floor(Math.random() * cssQuestion.length), 1);
  selectQuestion = currentQuestion[0].question;
  selectChoice1 = currentQuestion[0].choices[0];
  selectChoice2 = currentQuestion[0].choices[1];
  selectChoice3 = currentQuestion[0].choices[2];
  selectChoice4 = currentQuestion[0].choices[3];
  answerChoice = currentQuestion[0].answer;
  $('body').css('background-image', 'url(assets/levelTwo.gif)')
  $('#htmlMon').attr('id', 'cssMon').attr('src', 'assets/blueMon');
  $('<h3>', {html: wrongScore}).text('#score')
  $('<h2>', {html: monsterDamage}).text('#kill1')
  $('#questions').text(selectQuestion);
  $('#choice1').text(selectChoice1);
  $('#choice2').text(selectChoice2);
  $('#choice3').text(selectChoice3);
  $('#choice4').text(selectChoice4);
}

function javascriptMon(){
  currentQuestion= javascriptQuestion.splice(Math.floor(Math.random() * javascriptQuestion.length), 1);
  selectQuestion = currentQuestion[0].question;
  selectChoice1 = currentQuestion[0].choices[0];
  selectChoice2 = currentQuestion[0].choices[1];
  selectChoice3 = currentQuestion[0].choices[2];
  selectChoice4 = currentQuestion[0].choices[3];
  answerChoice = currentQuestion[0].answer;
  $('body').css('background-image', 'url(assets/lastLevel.gif)')
  $('#cssMon').attr('id', 'javascriptMon').attr('src', 'assets/lastMon');
  $('#questions').text(selectQuestion);
  $('#choice1').text(selectChoice1);
  $('#choice2').text(selectChoice2);
  $('#choice3').text(selectChoice3);
  $('#choice4').text(selectChoice4);
}

$('body').on('click','#scroll3', function next() {
  $('body').css('background-image', 'url(assets/levelOne.gif)')
  $('body').css('color', 'white')
  $('#kill1').css('border', 'white')
  alert('First level HTML!! HTML Monster approaches!!')
  $('audio').attr('src', 'assets/firstMon.wav')
  $('body').prepend('<img id="htmlMon" src="assets/green_monster" alt="HTML Monster">');
  $('body').prepend('<div id="score">Number Wrong:</div>')
  $('#score').prepend('<div id="level">Level: </div>')
  $('<div id="kill1">Monster Health:</div>').insertAfter('#htmlMon')
  $('<h1>', {html: stageLevel}).appendTo('#level')
  $('<h3>', {html: wrongScore}).appendTo('#score')
  $('<h2>', {html: monsterDamage}).appendTo('#kill1')
  $('<div id="resetButton"><a href="https://neonagx.github.io/GA_Adventure/">Reset</a></div>').insertAfter('#kill1')
  var $screen = $('#mainScreen');
  $screen.html('<div id="questions">'+selectQuestion+'</div>');
  $screen.append('<button id="choice1">'+selectChoice1+'</button><button id="choice2">'+selectChoice2+'</button><button id="choice3">'+selectChoice3+'</button><button id="choice4">'+selectChoice4+'</button>');
  $('button').on('click', function(){
    if($(this).text() === answerChoice){//finding the right choice
      monsterDamage -= 1
      $('h2').eq(0).text(monsterDamage)
      killingMon1()
    } else {
      wrongScore += 1;
      $('h3').eq(0).text(wrongScore);
      monster();
    }
    //first if statement checks all questions were answered
    if(10 - monsterDamage + wrongScore == 10) {
      if(monsterDamage >= 5){
        alert("Monster was still standing..It ate you...")
        $('body').html('<p class="over">YOU DIED...GAME OVER</p>')
        $('audio').attr('src', './assets/game_over.wav')
        //if you beat the level, stageLevel is added and changing level.
      } else {
        stageLevel += 1
        if (stageLevel == 2) {
          alertCss()
          $('audio').attr('src', './assets/secondMon.wav')
        } else if (stageLevel == 3) {
          alert("Last Monster!! Javascript Monster")
          $('audio').attr('src', './assets/lastMon.wav')
        }
        wrongScore = 0
        monsterDamage = 10
        $('h3').eq(0).text(wrongScore)
        $('h2').eq(0).text(monsterDamage)
        $('h1').eq(0).text(stageLevel)
      }
    }
    //replacing previous question with new question
    if(stageLevel == 1){
    currentQuestion = htmlQuestion.splice(Math.floor(Math.random() * htmlQuestion.length), 1);
    selectQuestion = currentQuestion[0].question;
    selectChoice1 = currentQuestion[0].choices[0];
    selectChoice2 = currentQuestion[0].choices[1];
    selectChoice3 = currentQuestion[0].choices[2];
    selectChoice4 = currentQuestion[0].choices[3];
    answerChoice = currentQuestion[0].answer;
    $('#questions').text(selectQuestion);
    $('#choice1').text(selectChoice1);
    $('#choice2').text(selectChoice2);
    $('#choice3').text(selectChoice3);
    $('#choice4').text(selectChoice4);
    //if it is stage two, then do replace html question with css
  } else if(stageLevel == 2){
    cssMon()
  } else if(stageLevel == 3){
    javascriptMon()
  } else {
    alert("You Won!! Monster has been defeated!!")
    $('body').html('<p id="sign">Victory!! You are the Three Week Master! Now go learn some more codes!</p>')
    $('body').append('<audio controls loop autoplay="source"><source src="./assets/code-geek.wav" type="audio/wav"></audio>')
    $('body').css('background-image', 'url(assets/victory-firework.gif)')
  }
  })
})
})
