var words = [
    ['sodium','a soft, silver-white, metallic element that oxidizes rapidly in moist air'],
    ['naive','showing a lack of experience, wisdom, or judgment'],
    ['bored','feeling weary because one lacks of interest'],
    ['crocodile','a large predatory semiaquatic reptile with long jaws, long tail, short legs'],
    ['business','the purchase and sale of goods in an attempt to make a profit'],
    ['water','a transparent, odorless, tasteless liquid'],
    ['electricity','is the set of physical phenomena associated with the presence and motion of electric charge'],
    ['helmet','a protective device covering the head'],
    ['tattoo','a form of body modification where a design is made by inserting ink'],
    ['computer','a programmable electronic device']
]

var lives = 7;
var initial_score = 0;

var randomizer = Math.floor(Math.random() * words.length);

// 2D array
// [0] are the words; [1] are the definition
var guessingWord = words[randomizer][0];
var guessingWord_arr = guessingWord.split('');
var word_def = words[randomizer][1];

// size is the size of the guessing word
// remaingLetters is the number of letters remaining to be guessed
// (remaingLetters = size) in the beginning
var size = guessingWord_arr.length;
var remainingLetters = size;

//Get elements for user sign up and log in
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPS');
const userName = document.getElementById("userName");
const btnLogin = document.getElementById("btnLogin");
const btnSignup = document.getElementById('btnSignup')
const btnLogout = document.getElementById("btnLogout");
const ranking = document.getElementById("ranking");