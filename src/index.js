import "../src/style.css";
import "./styles/scss/main.scss";
import "bootstrap";
const itemInput = document.getElementById("list-input");
const addButton = document.getElementById("add");
const itemList = document.querySelector(".item-list");
const enterValue = document.querySelector(".enter");
const clearButton = document.getElementById("clear-items");
let todoList = [];


function listOfItems() {
  var inputSorted = itemInput.value;
  var newElement = document.createElement("div");


  const deleteBtn = document.createElement("button");
  deleteBtn.className = "glyphicon glyphicon-remove";
  deleteBtn.style.cssFloat = "right";

  if (
    inputSorted == "" ||
    inputSorted.length == 0 ||
    inputSorted == null
  ) {
    enterValue.innerHTML = "Please Enter Some Value";
    enterValue.classList.add("showItem", "alert-danger");
    newElement = "";
  } else {
    newElement.innerHTML = inputSorted;
    newElement.appendChild(deleteBtn);
    itemList.appendChild(newElement);
  }
  itemInput.value = "";




}

/*function deleteButton() {
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "glyphicon glyphicon-remove";
  deleteBtn.style.cssFloat = "right";
  itemList.appendChild(deleteBtn);
}*/


function validateForm() {
  if (itemInput.value == "" || itemInput.value == null) {
    enterValue.innerHTML = "Please Enter Some Value";
    enterValue.classList.add("showItem", "alert-danger");
  } else if (itemInput.value != "") {
    enterValue.innerHTML = "";
    enterValue.classList.remove("showItem", "alert-danger");
  } else {
    itemInput.value = "";
  }
}


addButton.addEventListener("click", function () {
  listOfItems();
});

clearButton.addEventListener("click", function () {
  itemList.innerHTML = "";
});





/*if (itemInput.value == "" || itemInput.value == null) {
  alert("Please Fill in all sections");
  return;
} else {
  alert("here");
} */



/*function validateForm() {
  if (
    itemInput.value.length == 0 ||
    itemInput.value == "" ||
    itemInput.value == null
  ) {
    enterValue.innerHTML = "Please Enter Some Value";
    enterValue.classList.add("showItem", "alert-danger");
    return false;
  } else if (inputSorted != "") {
    enterValue.innerHTML = "";
    enterValue.classList.remove("showItem", "alert-danger");
  } else {
    itemInput.value = "";
  }
} */