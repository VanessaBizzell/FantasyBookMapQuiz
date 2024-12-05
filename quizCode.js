


// let element = document.getElementById(id);

// document.getElementById("moveQ1").addEventListener("click", moveOnto1);

const moveOnto1 = () => {
  let element = document.getElementById("questionOne");
  element.classList.toggle("invisible");
  document.getElementById("intro").style.display="none";
  
}

const moveOnto2 = () => {
  let element = document.getElementById("questionTwo");
  element.classList.toggle("invisible");
  document.getElementById("questionOne").style.display="none";
  
  
}

const moveOnto3= () => {
  let element = document.getElementById("questionThree");
  element.classList.toggle("invisible");
  document.getElementById("questionTwo").style.display="none";
  
  
}

const moveOnto4 = () => {
  let element = document.getElementById("questionFour");
  element.classList.toggle("invisible");
  document.getElementById("questionThree").style.display="none";
  
  
}

const moveOnto5 = () => {
  let element = document.getElementById("questionFive");
  element.classList.toggle("invisible");
  document.getElementById("questionFour").style.display="none";
  
  
}

const moveOntoResults = () => {
  let element = document.getElementById("results");
  element.classList.toggle("invisible");
  document.getElementById("questionFive").style.display="none";
  
  
}

// Results 


// const price = 50;
// const discountPer = 30;
// const discountPrice = (price, discountPer) => {
//   return price - (discountPer / 100) * price;
// };
// console.log(discountPrice(price, discountPer));