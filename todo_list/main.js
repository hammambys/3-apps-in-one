getTasks();

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByClassName("task");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Store task in local storage
function storeTask(taskInput) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(taskInput);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  console.log(tasks);
}

// Retrieve tasks from local storage
function getTasks() {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.forEach((task) => {
    addToList(task);
  });
}

// Delete task from local storage
function deleteTask(task) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  const index = tasks.indexOf(task);
  if (index > -1) {
    tasks.splice(index, 1);
  }
  localStorage.setItem("tasks", JSON.stringify(tasks));
  console.log(tasks);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    var task = div.getElementsByClassName("task-txt");
    deleteTask(task[0].innerHTML);
    div.style.display = "none";
  };
}

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  li.classList.add("task-txt");
  var inputValue = document.getElementById("add-task").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  var task = document.createElement("div");
  task.className = "task";
  task.appendChild(li);

  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("tasks").appendChild(task);
    storeTask(inputValue);
  }

  document.getElementById("add-task").value = "";
  addCloseBtn(task);
}

function addCloseBtn(task) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  task.appendChild(span);
  var close = document.getElementsByClassName("close");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      var task = div.getElementsByClassName("task-txt");
      deleteTask(task[0].innerHTML);
      div.style.display = "none";
    };
  }
}

function addToList(tsk) {
  var li = document.createElement("li");
  li.classList.add("task-txt");
  var t = document.createTextNode(tsk);
  li.appendChild(t);
  var task = document.createElement("div");
  task.className = "task";
  task.appendChild(li);
  document.getElementById("tasks").appendChild(task);
  document.getElementById("add-task").value = "";
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);
