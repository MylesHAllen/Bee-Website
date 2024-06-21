const question1A = document.getElementById("q1a");
const question1B = document.getElementById("q1b");
const question1C = document.getElementById("q1c");
const question1D = document.getElementById("q1d");
const button1 = document.getElementById("btn1");
const answer1 = document.getElementById("answer1");

button1.onclick = function(){
    if (question1A.checked){
        answer1.textContent = "Wrong answer, try again.";
    }
    else if (question1B.checked){
        answer1.textContent = "Wrong answer, try again.";
    }
    else if(question1C.checked){
        answer1.textContent = "Wrong answer, try again.";
    }
    else if(question1D.checked){
        answer1.textContent = "That is the correct answer, well done.";
    }
}


const question2A = document.getElementById("q2a");
const question2B = document.getElementById("q2b");
const question2C = document.getElementById("q2c");
const question2D = document.getElementById("q2d");
const button2 = document.getElementById("btn2");
const answer2 = document.getElementById("answer2");

button2.onclick = function(){
    if (question2A.checked){
        answer2.textContent = "Wrong answer, try again.";
    }
    else if (question2B.checked){
        answer2.textContent = "Wrong answer, try again.";
    }
    else if(question2C.checked){
        answer2.textContent = "That is the correct answer, well done.";
    }
    else if(question2D.checked){
        answer2.textContent = "Wrong answer, try again.";
    }
}


const question3A = document.getElementById("q3a");
const question3B = document.getElementById("q3b");
const question3C = document.getElementById("q3c");
const question3D = document.getElementById("q3d");
const button3 = document.getElementById("btn3");
const answer3 = document.getElementById("answer3");

button3.onclick = function(){
    if (question3A.checked){
        answer3.textContent = "That is the correct answer, well done.";
    }
    else if (question3B.checked){
        answer3.textContent = "Wrong answer, try again.";
    }
    else if(question3C.checked){
        answer3.textContent = "Wrong answer, try again.";
    }
    else if(question3D.checked){
        answer3.textContent = "Wrong answer, try again.";
    }
}


const question4A = document.getElementById("q4a");
const question4B = document.getElementById("q4b");
const question4C = document.getElementById("q4c");
const question4D = document.getElementById("q4d");
const button4 = document.getElementById("btn4");
const answer4 = document.getElementById("answer4");

button4.onclick = function(){
    if (question4A.checked){
        answer4.textContent = "Wrong answer, try again.";
    }
    else if (question4B.checked){
        answer4.textContent = "Wrong answer, try again.";
    }
    else if(question4C.checked){
        answer4.textContent = "Wrong answer, try again.";
    }
    else if(question4D.checked){
        answer4.textContent = "That is the correct answer, well done.";
    }
}


const question5A = document.getElementById("q5a");
const question5B = document.getElementById("q5b");
const question5C = document.getElementById("q5c");
const question5D = document.getElementById("q5d");
const button5 = document.getElementById("btn5");
const answer5 = document.getElementById("answer5");

button5.onclick = function(){
    if (question5A.checked){
        answer5.textContent = "That is the correct answer, well done.";
    }
    else if (question5B.checked){
        answer5.textContent = "Wrong answer, try again.";
    }
    else if(question5C.checked){
        answer5.textContent = "Wrong answer, try again.";
    }
    else if(question5D.checked){
        answer5.textContent = "Wrong answer, try again.";
    }
}


