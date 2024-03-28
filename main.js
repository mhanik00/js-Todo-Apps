// !javascript todo app



// *todo apps function
function addTask(){
    // TASK input box
    const inputBox = document.getElementById("input-box");
    // TASK list
    const todoList = document.getElementById("todo-list");
    // TASk 
    const inputTask = inputBox.value.trim();
    if(inputTask === ""){
        alert("You must write something!");

        // *delete button for empty task
        deleteButton.removeEventListener = function(){
            
        }
    }
    // *add task to list
        const li = document.createElement("li");
        li.innerHTML = inputBox.value;
        // push li to ul
        todoList.appendChild(li);
        // * For clear input
        inputBox.value = "";
        

    // *delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        // **create class for delete button
        deleteButton.classList.add("delete-button");

        // add delete button to li
        li.appendChild(deleteButton);
        deleteButton.addEventListener("click", function(){
            li.remove();
        })
    
    
    }
        
