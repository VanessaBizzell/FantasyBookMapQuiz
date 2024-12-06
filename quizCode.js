const moveOnto1 = () => {
  let element = document.getElementById("questionOne");
  element.classList.toggle("invisible");
  document.getElementById("intro").style.display = "none";
};

const moveOnto2 = () => {
  let element = document.getElementById("questionTwo");
  element.classList.toggle("invisible");
  document.getElementById("questionOne").style.display = "none";
};

const moveOnto3 = () => {
  let element = document.getElementById("questionThree");
  element.classList.toggle("invisible");
  document.getElementById("questionTwo").style.display = "none";
};

const moveOnto4 = () => {
  let element = document.getElementById("questionFour");
  element.classList.toggle("invisible");
  document.getElementById("questionThree").style.display = "none";
};

const moveOnto5 = () => {
  let element = document.getElementById("questionFive");
  element.classList.toggle("invisible");
  document.getElementById("questionFour").style.display = "none";
};

const moveOntoResults = () => {
  let element = document.getElementById("results");
  element.classList.toggle("invisible");
  document.getElementById("questionFive").style.display = "none";
};
const calculateScore = () => {
  let score = 0;
  const radios = document.querySelectorAll("input");
  for (const radioButton of radios) {
    if (radioButton.checked) {
      score = score + Number(radioButton.value);
    }
  }
  if (score >= 3) {
    msg = "You nailed it - congratulations!"}
  else if (score <3) {msg = "Good Try!"} 
  document.getElementById("score").innerHTML = "Your score is " + score + "/5 " + msg
};


