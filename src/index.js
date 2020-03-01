import "../src/style.css";
import "./styles/scss/main.scss";
import "bootstrap";
const itemInput = document.getElementById("list-input");
const addButton = document.getElementById("add");
const itemList = document.querySelector(".item-list");
const enterValue = document.querySelector(".enter");
const clearButton = document.getElementById("clear-items");
let todoList = [];

addButton.addEventListener("click", function () {
  var inputSorted = itemInput.value;
  var newElement = document.createElement("div");
  newElement.innerHTML = inputSorted;

  //delete icon
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "glyphicon glyphicon-remove";
  deleteBtn.style.cssFloat = "right";

  newElement.appendChild(deleteBtn);

  if (inputSorted == "" || inputSorted == null) {
    enterValue.innerHTML = "Please Enter Some Value";
    enterValue.classList.add("showItem", "alert-danger");
  } else if (inputSorted != "") {
    enterValue.innerHTML = "";
    enterValue.classList.remove("showItem", "alert-danger");
  } else {
    itemInput.value = "";
  }
  itemInput.value = "";


  itemList.appendChild(newElement);
});

clearButton.addEventListener("click", function () {
  itemList.innerHTML = "";
});