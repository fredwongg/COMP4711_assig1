function load(){
    location.reload();
}

function reset(){
    load();
}

function win() {
    window.setInterval(function() {
        
        if (confirm("You won! Wanna try again?")) {
            load();
        } else {
            window.close();
        }
        
        },100);
}

function lose() {
    window.setInterval(function() {
        if (confirm("You lost all your lives. Wanna try again?")) {
            load();
        } else {
            window.close();
        }
    }, 100);
}

// when the user input is correct
function correct(letter, id) {
    document.getElementById(id).innerHTML = letter;
}

// check user input
function guess(char) { 
    // check if it is included
    if (guessingWord_arr.includes(char)) {

        // check for occurance of the letter
        for(i=0; i < size; i++) {
            var wanted = letterLine_arr[i];
            var input = char + i;
            if (input == wanted) {
                correct(char, wanted);
                remainingLetters--;
                score++;
                document.getElementById("score").innerHTML = score;
            }
        }
    } else {
        lives--;
        score--;
        document.getElementById("lives").innerHTML = lives;
        document.getElementById("score").innerHTML = score;

        // when user runs out of lives
        if (lives == 0) {
            lose();
        }
    }
    
    // disable letter after being guessed
    document.getElementById(char).disabled = true;
    document.getElementById(char).style.backgroundColor = "white";
    document.getElementById(char).style.color = "grey";

    // user wins when no more letters to guess
    if (remainingLetters == 0) {
        win();
    }

}
