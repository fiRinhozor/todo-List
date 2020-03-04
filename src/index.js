import "../src/style.css";
import "./styles/scss/main.scss";
import "bootstrap";
const itemInput = document.getElementById("list-input");
const addButton = document.getElementById("add");
const itemList = document.querySelector(".item-list");
const enterValue = document.querySelector(".enter");
const clearButton = document.getElementById("clear-items");
let todoList = [];

var deleteBtn;

function handleItem() {
  var inputSorted = itemInput.value;
  var newElement = document.createElement("div");
  newElement.className = "test";

  deleteBtn = document.createElement("button");
  deleteBtn.className = "remove";
  deleteBtn.style.cssFloat = "right";

  var del = document.getElementsByClassName("remove");
  for (var i = 0; i < del.length; i++) {
    del[i].addEventListener("click", deleteListElement);
  }

  if (inputSorted == "" || inputSorted.length == 0 || inputSorted == null) {
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

function deleteListElement() {
  //remove the parent of button from its grand parent
  this.parentNode.parentNode.removeChild(this.parentNode);
}

itemInput.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard

  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("add").click();
  }
});

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

addButton.addEventListener("click", function() {
  handleItem();
});

clearButton.addEventListener("click", function() {
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

/*setTimeout(function () {
      enterValue.innerHTML = "Please Enter Some Value";
      enterValue.classList.add("showItem", "alert-danger");
    }, 1000);*/

/*function emptyInput() {
  enterValue.innerHTML = "Please Enter Some Value";
  enterValue.classList.add("showItem", "alert-danger");
} */

/*function deleteButton() {
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "glyphicon glyphicon-remove";
  deleteBtn.style.cssFloat = "right";
  itemList.appendChild(deleteBtn);
}*/
