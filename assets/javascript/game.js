//variable containing the current question 
var currentQuestion;

function Question(id, qText, answers, rightAnswer, picture) {
  this.id = id;
  this.qText = qText;
  this.picture = picture;
  this.answers = answers;
  this.rightAnswer = rightAnswer;
  this.checkAnswer = function (answerNumber) {
    if (this.rightAnswer === answerNumber) {
      return true;
    }
    return false;
  }
}

//Shuffle the array of question,
/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}
//Method to generate the questions

var questionsRef = db.collection('questions');

function getquestionData(i, cb) {
  var questionList = [];
  questionsRef.get().then(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
      questionList.push(doc.data());
    });
    // var changedOrder = shuffle(questionList);
    cb(questionList[i]);
  });
}


// myQuiz.push(new Question(0, "How many days did the creation last", [6, 5, 10, 7], 0, "img0.jpg"));
// myQuiz.push(new Question(1, "In the book of Exodus God send a man to deliver the Hebrews from slavery: that man was ", ["Jesus", "Noah", "Moses", "Abraham"], 2, "img1.jpg"));
// myQuiz.push(new Question(2, "The 10 Commandments were given by God to Moses on the Mount:", ["Carmel", "Hermon", "Zion", "Sinai"], 3, "img2.jpg"));
// myQuiz.push(new Question(3, "Who did God promised that one of his descendants whould reing forever", ["Samuel", "David", "Darius", "Herod"], 1, "img3.jpg"));
// shuffle(myQuiz);


function Countdown(initial, display) {
  this.initial = initial;
  this.counter = initial;
  this.start = function () {
    var timer = setInterval(function () {

      if (initial === 0) {
        clearInterval(timer);
        this.display("Time is over");
      } else {
        initial--;
        this.display(initial)
      }
    }, 1000);
  },
    this.stop = function () {

    },
    this.reset = function () {

    },
    this.display = function (text) {
      $(display).text(text);
    }
}

function Game(qt, uid) {
  this.userId = uid;
  this.counter = qt;
  // this.currentQuestion = function () {

  // }
  // this.increaseRightScore = function () {

  // }
  // this.increaseWrongScore = function () {

  // }
  // this.countdown = function () {

  // }
  this.loadQuestion = function (q) {
    //Display the question
    $("#diplayQuestion").html(q.text);

    for (const key in q.answers) {
      if (q.answers.hasOwnProperty(key)) {
        const answer = q.answers[key];
        var $answer = $('<div class="choice">');
        $answer.attr("id", "answer-" + key);
        if (key === q.rightAnswer) {
          $answer.attr("isCorrect", true);
        }
        $answer.html(answer);
        $answer.appendTo('#option-group');
      }

    }


  }
  // this.nextQuestion = function () {

  // }
  // this.timeUp = function () {

  // }
  // this.results = function () {

  // }
  // this.clicked = function () {

  // }
  // this.asweredCorrectly = function () {

  // }
  // this.asweredIncorrectly = function () {

  // }
  // thi.reset = function () {

  // }
}



// Script for the DOM Manipulation 
$(document).ready(function () {
  var game = new Game(30, 123);
  getquestionData(4, game.loadQuestion);
  $(".option-group").delegate('.choice', 'click', function(){
    if($(this).attr("isCorrect")){
      alert("It is correct!")
    } else{
      alert("It is Wrong!")
    }
  });

  $('#restartBtn').click(function () {

  })


});

