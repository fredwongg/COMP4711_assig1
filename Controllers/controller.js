function reset() {
    location.reload();
}

function win() {
    window.setInterval(function () {

        if (confirm("You won! Wanna try again?")) {
            reset();
        } else {
            window.close();
        }

    }, 100);

}

function lose() {
    window.setInterval(function () {
        if (confirm("You lost all your lives. Wanna try again?")) {
            reset();
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
        for (i = 0; i < size; i++) {
            var wanted = letterLine_arr[i];
            var input = char + i;
            if (input == wanted) {
                correct(char, wanted);
                remainingLetters--;
                initial_score++;
                writeUserData(firebase.auth().currentUser.uid, initial_score);
            }
        }
        document.getElementById("score").innerHTML = initial_score;
    } else {
        lives--;
        initial_score--;
        writeUserData(firebase.auth().currentUser.uid, initial_score);
        document.getElementById("lives").innerHTML = lives;
        document.getElementById("score").innerHTML = initial_score;

        // when user runs out of lives
        if (lives == 0) {
            updateUserData(firebase.auth().currentUser.uid, initial_score);
            lose();
        }
    }

    // disable letter after being guessed
    document.getElementById(char).disabled = true;
    document.getElementById(char).style.backgroundColor = "white";
    document.getElementById(char).style.color = "grey";

    // user wins when no more letters to guess
    if (remainingLetters == 0) {
        updateUserData(firebase.auth().currentUser.uid, initial_score);
        win();
    }

}

//Add log in event
btnLogin.addEventListener('click', e => {
    //get email and ps
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    //sign in
    const promise = auth.signInWithEmailAndPassword(email, pass);
    //check validation
    promise.catch(e => emsg.innerHTML = e.message);
    promise.then(e => emsg.innerHTML = "");
});

//Add sign up event
btnSignup.addEventListener('click', e => {
    //get email and ps
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const uname = userName.value;
    const auth = firebase.auth();
    //sign in
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    //check validation
    promise.catch(e => emsg.innerHTML = e.message);
    promise.then(e => {
        emsg.innerHTML = "";
        var user = firebase.auth().currentUser;
        console.log(uname);
        user.updateProfile({
            name: uname,
        })
    });
});

//Add log out event
btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
    reset();
});

//Display GameBoard when logged in only
firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        console.log(firebaseUser);
        btnLogout.style.display = "inline";
        ranking.style.display = "inline";
        btnLogin.style.display = "none";
        btnSignup.style.display = "none";
        txtEmail.style.display = "none";
        txtPS.style.display = "none";
        userName.style.display = "none";
        GameBoard.style.display = "block";
    } else {
        console.log("not logged in");
        btnLogout.style.display = "none";
        ranking.style.display = "none";
        txtEmail.style.display = "block";
        txtPS.style.display = "block";
        userName.style.display = "block";
        GameBoard.style.display = "none";
    }
});

//Store new user's uid, email, and default score in firebase realtime database
function writeUserData(userId, score) {
    firebase.database().ref('users/' + userId).set({
      uid: userId,
      score : score,
      name: userName.value,
      email: txtEmail.value
    });
  }

//Update current user's score in database
function updateUserData(userId, score) {
    if (score <= firebase.database().ref()){

    }
    firebase.database().ref('users/' + userId).update({
        score: score
    });
}
