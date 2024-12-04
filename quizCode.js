function questionOne() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("questionOne").style.display = "flex";
    document.getElementById("questionTwo").style.display = "none";
    document.getElementById("questionThree").style.display = "none";
    document.getElementById("questionFour").style.display = "none";
    document.getElementById("questionFive").style.display = "none";
  }

function questionTwo() {
    document.getElementById("questionOne").style.display = "none";
    document.getElementById("questionTwo").style.display = "flex"
    document.getElementById("questionThree").style.display = "none";
    document.getElementById("questionFour").style.display = "none";
    document.getElementById("questionFive").style.display = "none";
  }

function questionThree() {
    document.getElementById("questionOne").style.display = "none";
    document.getElementById("questionTwo").style.display = "none";
    document.getElementById("questionThree").style.display = "flex";
    document.getElementById("questionFour").style.display = "none";
    document.getElementById("questionFive").style.display = "none";
}

function questionFour() {
    document.getElementById("questionOne").style.display = "none";
    document.getElementById("questionTwo").style.display = "none";
    document.getElementById("questionThree").style.display = "none";
    document.getElementById("questionFour").style.display = "flex";
    document.getElementById("questionFive").style.display = "none";
}

function questionFive() {
    document.getElementById("questionOne").style.display = "none";
    document.getElementById("questionTwo").style.display = "none";
    document.getElementById("questionThree").style.display = "none";
    document.getElementById("questionFour").style.display = "none";
    document.getElementById("questionFive").style.display = "flex";
}