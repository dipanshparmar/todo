/* variables */
// getting todo list
const toDoList = document.querySelector("#todo-list-collection");

// getting addtodo button
const addTodo = document.querySelector("#add-todo-button");

// getting inputted value
const inputBox = document.querySelector("#todo-item-input");


/* functions */

// function to create the list element
function addItem() {
  // creating div element
  const div = document.createElement("div");

  // adding class to div element
  div.classList.add("todo-item-container");

  //creating span element
  const span = document.createElement("span");

  // creating content for span
  span.innerText = inputBox.value;

  // creating i tag for check button
  const checkButton = document.createElement("i");

  // adding classes to the checkButotn
  checkButton.classList.add("fas");
  checkButton.classList.add("fa-check");

  // adding id to the checkButton
  checkButton.id = "check-button";

  // creating i tag for delete button
  const delButton = document.createElement("i");

  // adding classes to the checkButotn
  delButton.classList.add("fas");
  delButton.classList.add("fa-trash");

  // adding id to the checkButton
  delButton.id = "delete-button";

  // appending the tags to div
  div.appendChild(span);
  div.appendChild(checkButton);
  div.appendChild(delButton);

  // appending the item to the list by validating
  if (inputBox.value.trim() !== "") {
    // adding the item to the list group
    toDoList.appendChild(div);
    // making the textbox empty again
    inputBox.value = "";
  } else {
    // displaying the alert box
    document.querySelector("#alert").style.opacity = "1";
    document.querySelector("#alert").style.pointerEvents = "auto";
    document.querySelector("#alert").style.transition = "0.2s ease-in-out";
  }
}

/* event listeners */
// listening for the click event on the add button
addTodo.addEventListener("click", addItem);

// to check if the enter key is pressed on input field or not
// if enter key is pressed, than add that todo item to the list
inputBox.addEventListener("keypress", (event) => {
  // checking if the clicked key is enter
  if (event.keyCode === 13) {
    // preventing reload
    event.preventDefault();

    // calling the additem function
    addItem();
  }
});

// event for closing the alert using the close button
document.querySelector("#close-alert").addEventListener("click", () => {
  document.querySelector("#alert").style.opacity = "0";
  document.querySelector("#alert").style.pointerEvents = "none";
  document.querySelector("#alert").style.transition = "0.2s ease-in-out";
});

// listening for keypress event so that alert can be hide when the input box is filled with the characters
inputBox.addEventListener("keypress", (event) => {
  if (event.keyCode !== 13) {
    document.querySelector("#alert").style.opacity = "0";
    document.querySelector("#alert").style.pointerEvents = "none";
    document.querySelector("#alert").style.transition = "0.2s ease-in-out";
  }
});

// event listener to mark complete the todo task
document.querySelector('#main-todo ul').addEventListener('click', () => {
  if(event.target.classList[1] == 'fa-check') {
    event.target.parentElement.classList.toggle('makeItBlur');
    event.target.parentElement.firstElementChild.classList.toggle('lineThrough');
  }
})

// event listener to delete the todo task
document.querySelector('#main-todo ul').addEventListener('click', () => {
  if(event.target.classList[1] == 'fa-trash') {
    event.target.parentElement.remove();
  }
})

// eventlistener to close the banner
document.querySelector('#to-close-banner').addEventListener('click', () => {
  document.querySelector('#banner').style.display = 'none';
})
