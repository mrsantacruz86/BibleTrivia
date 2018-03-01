//variable containing the current question 
var currentQuestion;

function Question(id, qText, answer, rightAnswer,picture) {
    this.id = id;
    this.qText = qText;
    this.picture = picture;
    this.answer = answer;
    this.rightAnswer = rightAnswer;
    this.checkAnswer = function(answerNumber){
        if (this.rightAnswer === answerNumber) {
            return true;
        }
        return false;
    }
}

// var gameCountdown = setInterval(displayTime())

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
}
//Method to generate the questions

var quiz =function (){
    var myQuiz=[];
    myQuiz.push(new Question(0, "How many days did the creation last", [6,5,10,7], 0, "img0.jpg"));
    myQuiz.push(new Question(1, "In the book of Exodus God send a man to deliver the Hebrews from slavery: that man was ", ["Jesus","Noah","Moses","Abraham"], 2, "img1.jpg"));
    myQuiz.push(new Question(2, "The 10 Commandments were given by God to Moses on the Mount:", ["Carmel","Hermon","Zion","Sinai"], 3, "img2.jpg")); 
    myQuiz.push(new Question(3, "Who did God promised that one of his descendants whould reing forever", ["Samuel","David","Darius","Herod"], 1, "img3.jpg"));
    shuffle(myQuiz);
    return myQuiz;
}

//Display the question
function displayQuestion(q) {
    var $questionDisplay = $('.question'); 
    $questionDisplay.data('data',q);
    $questionDisplay.html(q.qText);
    
    for (var i = 0; i < 4; i++) {
        $(`#ans-${i}`).html(q.answer[i]);
    }
}
// Script for the DOM Manipulation 
$(document).ready(function() {
    currentQuestion = quiz()[2];
    displayQuestion(currentQuestion);

    // $(".choice").click(function() {
    // //var d = this.data();
    // //    if(currentQuestion.checkAnswer($this.data('data'))){
    // //         alert('Correct!!');
    // //     }else{
    //         alert(currentQuestion);
    // //     } 
    // });

    // //Populate character's list
    // $.each(avatarList, function(i, element) {
    //     createAvatar(element, $(".characters"));
    // });
    //OnClick event to select my character from the list of avatars
    
});

  