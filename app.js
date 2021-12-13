const form = document.querySelector("#task-form"); 
const taskInput = document.querySelector("#task");
const filter = document.querySelector("#filter");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");

// loas all event listeners
loadEventListeners();

//load all event listeners
function loadEventListeners() {
  //Add task event
  form.addEventListener("submit", addTask);
 //Remove task event
 taskList.addEventListener("click", removeTask); 
 //Clear Task event
 clearBtn.addEventListener("click", clearTasks);
 // Filter Tasks event
 filter.addEventListener("keyup", filterTasks)

}

// Add Task
function addTask(e)  {
  if(taskInput.value === "") {
    alert("Add a Task");
  }

  //Create li element 
  const li = document.createElement("li");
  //Add Calss name
  li.className = "collection-item";
  //Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  //Create new link element
  const link = document.createElement("a");
  //Add class
  link.className = "delete-item secondary-content";
  //Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append the link to li
  li.appendChild(link);
  //Append li to ul
  taskList.appendChild(li);
  // Clear input
  taskInput.value = "";
  console.log(taskList);

  e.preventDefault();
}

//Remove Task 
function removeTask(e) {
  if(e.target.parentElement.classList.contains("delete-item")) {
    if(confirm("Are You Sure?")) {
      e.target.parentElement.parentElement.remove();
    }
  }
 
}

function clearTasks() {
  //  taskList.innerHTML = "";
  // Or Faster way
  while(taskList.firstChild) {
     taskList.removeChild(taskList.firstChild);
  }
}

// Filter Tasks
 function filterTasks(e) {
   const text = e.target.value.toLowerCase();

   document.querySelectorAll(".collection-item").forEach(function(task) {
     const item = task.firstChild.textContent;
     if(item.toLowerCase().indexOf(text) != -1 ){
       task.style.display = "block";
     } else {
      task.style.display = "none";
     }
   });

 }
