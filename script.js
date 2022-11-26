
let checkList=[]

const addTaskButton = document.getElementById("addTaskButton")

function addTask(taskText){
    const taskListContainer = document.getElementById("taskListContainer")
    const taskContainer = document.createElement("li")
    taskContainer.id = "taskListItem"

    const taskCheckbox = document.createElement("input")
    taskCheckbox.type = "checkbox"
    taskCheckbox.id = "taskListCheckbox"

    const taskTextElement = document.createElement("p")
    taskTextElement.textContent = taskText
    taskTextElement.id = "taskListText"

    const taskDeleteButton = document.createElement("button")
    taskDeleteButton.textContent = "X"
    taskDeleteButton.id = "taskDeleteButton"


    taskContainer.appendChild(taskCheckbox)
    taskContainer.appendChild(taskTextElement)
    taskListContainer.appendChild(taskContainer)
    taskContainer.appendChild(taskDeleteButton)


    taskCheckbox.addEventListener("change", (e) => {
                if (e.target.checked){
                    taskTextElement.classList.add("strike_out")
        }
        else{
            taskTextElement.classList.remove("strike_out")
        }

    })

    taskDeleteButton.addEventListener ("click", () => {

        taskContainer.remove()
    
    })
    
}


addTaskButton.addEventListener("click", () =>{

   const addTaskTextbox = document.getElementById ("addTaskInput")
   const taskText = addTaskTextbox.value
   if (taskText === undefined || taskText === "" || taskText === null){

    return
   }

   checkList.push(taskText)
   addTask(taskText)
   addTaskTextbox.value = ""

})
