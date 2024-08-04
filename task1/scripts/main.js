class Todo{
    constructor(name, dueDate, description){
        this.name = name;
        this.dueDate = dueDate;
        this.description = description;
    }
}

const newTask = document.getElementById("create");

newTask.addEventListener('click', (event)  =>{
    event.preventDefault();
    const name = document.getElementById("name").value;
    const desc = document.getElementById("description").value;
    const date = document.getElementById("date").value;
    const tasklist = document.getElementById("Tasks");

    

    const newTodo = new Todo(name, date, desc);

    const listItem = document.createElement("li");
    const task = document.createElement("span");
    const due = document.createElement("span");
    const descr = document.createElement("span");

    task.textContent = "Name: "+newTodo.name+"  ";
    due.textContent = "Due for: "+newTodo.dueDate+"  ";
    descr.textContent = "Description: "+newTodo.description+"  ";

    listItem.appendChild(task);
    listItem.appendChild(due);
    listItem.appendChild(descr);
    descr.after(document.createElement("br"));

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = function() {
        editTask(listItem); 
    };
    listItem.appendChild(editButton);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() { 
        deleteTask(listItem); 
    };
    listItem.appendChild(deleteButton);
    tasklist.appendChild(listItem);

});

function editTask(listItem) {
    const taskSpan = listItem.querySelector("span");
    const newTaskText = prompt("Edit task:", );
    if (newTaskText !== null && newTaskText.trim() !== "") {
      taskSpan.textContent = "Name: "+newTaskText+"  ";
    }
  }
function deleteTask(listItem){
    listItem.remove();
}

