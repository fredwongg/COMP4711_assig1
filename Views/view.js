// Create a <p>....</p>
var player_lives = document.createElement("p");
// Create a string
var lives_string = document.createTextNode("Remaining Lives: ");
// Append <p> lives_string </p>
player_lives.appendChild(lives_string);
// Find the id "lives_header" and appendChild
document.getElementById("lives_header").appendChild(player_lives);
// Print the number of lives, set as 7 in model.js
document.getElementById("lives").innerHTML = lives;

// Create and print score
var player_score = document.createElement("p");
var score_string = document.createTextNode("Scores: ");
player_score.appendChild(score_string);
document.getElementById("score_header").appendChild(player_score);
document.getElementById("score").innerHTML = initial_score;

// Create and print definition
var word_definition = document.createElement("p");
// word_def in model.js
var definition_string = document.createTextNode(word_def);
word_definition.appendChild(definition_string);
document.getElementById("definition").style.fontSize = "20px";
document.getElementById("definition").appendChild(word_definition);

// Create keyboard; loop 26 times
for (var i=0; i<=25; i++){
    var btn = document.createElement("button");
    // toString(radix)
    // radix - optional. which base to use?
    //         must be between 2 and 36
    // base 36: a=10; z=35
    var character = (i+10).toString(36);

    // "btn btn-success" from bootstrap library
    btn.className = "btn btn-default"
    btn.style.width = '80px';
    btn.style.height = '80px';
    btn.style.textAlign = 'center';
    btn.style.fontSize = '40px'
    btn.style.margin = '1px';
    btn.id = character;
    var btn_text = document.createTextNode(character);
    btn.appendChild(btn_text);
    document.getElementById("keyboard").appendChild(btn);
    btn.onclick = function() {guess(this.id);};
}

// Create reset button
var btn_reset = document.createElement("button");
var btn_reset_text = document.createTextNode("Next");
btn_reset.appendChild(btn_reset_text);
btn_reset.onclick = function() {reset();};
// "btn btn-warning" from bootstrap library
btn_reset.className = "btn btn-warning"
btn_reset.style.width = '100px';
document.getElementById("reset").appendChild(btn_reset);

// Create letters line as buttons
var letterLine_arr = new Array(size);
for (i = 0; i < size; i++) {
    var letterLine = document.createElement("button");
    var letterLine_text = document.createTextNode(" ");
    letterLine.appendChild(letterLine_text);
    
    letterLine.className = "btn btn-light"
    letterLine.disabled = 'true';
    letterLine.style.width = '80px';
    letterLine.style.height = '80px';
    letterLine.style.textAlign = 'center';
    letterLine.style.fontSize = '40px';
    letterLine.style.margin = '5px';
    letterLine.style.backgroundColor = "white";
    letterLine.style.borderRadius = "0px";
    letterLine.style.borderBottomColor = "Black";
    letterLine.style.borderTopColor = "white";
    letterLine.style.borderLeftColor = "white";
    letterLine.style.borderRightColor = "white";

    letterLine.id = guessingWord_arr[i] + i;
    letterLine_arr[i] = letterLine.id;
    
    document.getElementById("letter_line").appendChild(letterLine);
}
