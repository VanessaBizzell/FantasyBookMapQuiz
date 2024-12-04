function questionOne() {
    document.getElementById("questionOne").style.display = "inline-block";
    document.getElementById("questionTwo").style.display = "none";
    document.getElementById("questionThree").style.display = "none";
    document.getElementById("questionFour").style.display = "none";
    document.getElementById("questionFive").style.display = "none";
  }

function questionTwo() {
    document.getElementById("questionOne").style.display = "none";
    document.getElementById("questionTwo").style.display = "inline-block"
    document.getElementById("questionThree").style.display = "none";
    document.getElementById("questionFour").style.display = "none";
    document.getElementById("questionFive").style.display = "none";
  }

function questionThree() {
    document.getElementById("questionOne").style.display = "none";
    document.getElementById("questionTwo").style.display = "none";
    document.getElementById("questionThree").style.display = "inline-block";
    document.getElementById("questionFour").style.display = "none";
    document.getElementById("questionFive").style.display = "none";
}

function questionFour() {
    document.getElementById("questionOne").style.display = "none";
    document.getElementById("questionTwo").style.display = "none";
    document.getElementById("questionThree").style.display = "none";
    document.getElementById("questionFour").style.display = "inline-block";
    document.getElementById("questionFive").style.display = "none";
}

function questionFive() {
    document.getElementById("questionOne").style.display = "none";
    document.getElementById("questionTwo").style.display = "none";
    document.getElementById("questionThree").style.display = "none";
    document.getElementById("questionFour").style.display = "none";
    document.getElementById("questionFive").style.display = "inline-block";
}