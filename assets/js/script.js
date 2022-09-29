// funcao que adiciona tarefas
function addTask() {
    // titulo tarefa
    const taskTitle = document.querySelector("#task-title").value;
    if (taskTitle) {

        // clonar template
        const template = document.querySelector(".template"); // selecionando template
        const newTask = template.cloneNode(true); //clonando o template

        // adicionar titulo
        newTask.querySelector(".task-title").textContent = taskTitle;

        // remover classes desnecessarias
        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        //adicionar a tarefa na lista
        const list = document.querySelector("#task-list");
        list.appendChild(newTask);

        //adicionar o evento de remover tarefa
        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function() {
            removeTask(this);
        });

        //adicionar evento de completar tarefa
        const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function() {
            completeTask(this);
        });

        //limpar input title
        document.querySelector("#task-title").value = "";
    }
}

// Evento de adicionar tarefa
const addBtn = document.querySelector("#add-btn");
addBtn.addEventListener("click", function(e) {
    e.preventDefault();
    addTask(); //chamando funcao de adicionar tarefas

});

// funcao completar tarefa
function completeTask(task) {
    const taskComplete = task.parentNode;
    taskComplete.classList.toggle("done"); // toggle para verificar se ja existe a classe done

}

//funcao de remover tarefa
function removeTask(task) {
    task.parentNode.remove(true); //removendo elemento pai 
}