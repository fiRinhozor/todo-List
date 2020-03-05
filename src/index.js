import "../src/style.css";
import "./styles/scss/main.scss";
import "bootstrap";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";
const itemInput = document.getElementById("list-input");
const addButton = document.getElementById("add");
const itemList = document.querySelector(".item-list");
const enterValue = document.querySelector(".enter");
const clearButton = document.getElementById("clear-items");
let todoList = [];

var deleteBtn;
var completeBtn;

function handleItem() {
  var inputSorted = itemInput.value;
  var newElement = document.createElement("div");
  newElement.className = "gege";

  deleteBtn = document.createElement("button");
  deleteBtn.className = "remove fas fa-minus-circle";

  completeBtn = document.createElement("button");
  completeBtn.className = "complete fas fa-check";
  completeBtn.id = "pew"


  //remove element
  var del = document.getElementsByClassName("remove");
  for (var i = 0; i < del.length; i++) {
    del[i].addEventListener("click", deleteListElement);
  }


  //complete element
  var cbox = document.querySelectorAll(".gege");
  var a = document.querySelectorAll("#pew");
  for (let i = 0; i < cbox.length; i++) {
    cbox[i].addEventListener("click", function () {
      cbox[i].classList.add("done");
      console.log(cbox.target);
    });
  }



  if (inputSorted == "" || inputSorted.length == 0 || inputSorted == null) {
    enterValue.innerHTML = "Please Enter Some Value";
    enterValue.classList.add("showItem", "alert-danger");
    newElement = "";
  } else {
    newElement.innerHTML = inputSorted;
    newElement.appendChild(deleteBtn);
    newElement.appendChild(completeBtn);
    itemList.appendChild(newElement);
  }
  itemInput.value = "";

}


document.querySelectorAll(".gege").forEach(box =>
  box.addEventListener("click", () => box.classList.toggle("red"))
);


function deleteListElement() {
  //remove the parent of button from its grand parent
  this.parentNode.parentNode.removeChild(this.parentNode);
}


itemInput.addEventListener("keyup", function (event) {
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

addButton.addEventListener("click", function () {
  handleItem();
});

clearButton.addEventListener("click", function () {
  itemList.innerHTML = "";
});