//Avatar object declaration  
var myAvatar;
var defender;
function Character(id, name, picture, hp, attackPower, counterAttackPower,) {
    this.id = id;
    this.name = name;
    this.picture = picture;
    this.hp = hp;
    this.attackPower = attackPower;
    this.counterAttackPower = counterAttackPower;
    this.attack = function(enemy){
        this.attackPower += this.counterAttackPower;
        enemy.hp -= this.attackPower;
        this.hp -= enemy.counterAttackPower;
    }
}
function createCaracter(){
    yoda = new Character(0, "Yoda", "yoda.jpg", 120, 0, 8);
    luke = new Character(1, "Luke Skywalker", "luke.jpg", 100, 0, 6);
    maul = new Character(2, "Darth Maul", "maul.jpg", 150, 0, 15);
    vader = new Character(3, "Darth Vader", "vader.jpg", 180, 0, 20);
}
//Functions to end and reset the game
function startGame() {
    createCaracter();
}
//Calling the startGame() function
startGame();

//Array of objects containing all the characters
var avatarList = [yoda, luke, maul, vader];

//Functions to refresh HP
function refreshHP() {
    avatarList.forEach(function(avatar) {
        var $avatarCard = $(`#character-${avatar.id}`);
        $avatarCard.find('.avatar-hp').text(avatar.hp);
    })
}

// Script for the DOM Manipulation 
$(document).ready(function() {

    //Create avatars
    function createAvatar(avatar, place) {
        var card = $(`<div id="character-${avatar.id}">`); 
        card.addClass("avatar character thumbnail");
        card.data('data',avatar);
        card.append("<div class = 'avatar-name'>" + avatar.name + "</div>");
        card.append("<img src='assets/images/" + avatar.picture + "'></img>");
        card.append("<div class = 'avatar-hp'>" + avatar.hp + "</div>");
        place.append(card);   
    }

    //Populate character's list
    $.each(avatarList, function(i, element) {
        createAvatar(element, $(".characters"));
    });
    //OnClick event to select my character from the list of avatars
    $('.avatar').click(function(){
        if(!myAvatar){
            myAvatar = $(this).data('data');
            $(this).removeClass('character').addClass('selected-card');
            $(this).appendTo($('.mySpace'));
        }
        else {
            defender = $(this).data('data');
            $(this).removeClass('character').addClass('enemy-card');
            $(this).appendTo(".defender-area");
        }
    });
    $('#attackBtn').click(function (){
        var remainingDefenders = 3;
        if (remainingDefenders > 0) {
            myAvatar.attack(defender);
            refreshHP();
            if (myAvatar.hp <= 0 ) {
                $('#attack-detail').text('You have been defeated...GAME OVER!');
            }
            else{
                if (defender.hp <= 0) {
                    $('.enemy-card').remove();
                    defender = null;
                    remainingDefenders --;
                }
                else{
                    $('#attack-detail').html('You attacked ' + defender.name + ' for ' + myAvatar.attackPower + ' damage.</br>');
                    $('#attack-detail').append(defender.name + ' attacked you back for ' + defender.counterAttackPower + ' damage.')   
                }
            }
        }
        else{
            $('#attack-detail').text('You Won!...GAME OVER!');
        }
    });
    $('#restartBtn').click(function () {
        location.reload();
    }) 
});

