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
function generateQuestions(){
    q1 = new Question(0, "How many days did the creation last", [6,5,10,7], 0, "img0.jpg");
    q2 = new Question(1, "In the book of Exodus God send a man to deliver the Hebrews from slavery: that man was ", ["Jesus","Noah","Moses","Abraham"], 2, "img1.jpg");
    q3 = new Question(2, "The 10 Commandments were given by God to Moses on the Mount:", ["Carmel","Hermon","Zion","Sinai"], 3, "img2.jpg"); 
    q4 = new Question(3, "Who did God promised that one of his descendants whould reing forever", ["Samuel","David","Darius","Herod"], 1, "img3.jpg");
}
// //Functions to end and reset the game
// function startGame() {
//     createCaracter();
// }
// //Calling the startGame() function
// startGame();

//Array of objects containing all the characters
// var avatarList = [yoda, luke, maul, vader];

// //Functions to refresh HP
// function refreshHP() {
//     avatarList.forEach(function(avatar) {
//         var $avatarCard = $(`#character-${avatar.id}`);
//         $avatarCard.find('.avatar-hp').text(avatar.hp);
//     })
// }


// Functions to make the timer works.
var gameCountdown = setInterval(displayTime())


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
    generateQuestions();
    currentQuestion = q2;
    displayQuestion(currentQuestion);

    $(".choice").click(function() {
    //var d = this.data();
    //    if(currentQuestion.checkAnswer($this.data('data'))){
    //         alert('Correct!!');
    //     }else{
            alert(currentQuestion);
    //     } 
    });

    // //Populate character's list
    // $.each(avatarList, function(i, element) {
    //     createAvatar(element, $(".characters"));
    // });
    //OnClick event to select my character from the list of avatars
    
});

  