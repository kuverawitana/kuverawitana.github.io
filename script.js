const inputBox = document.getElementById("input-box");
const deadlineInput = document.getElementById('deadline-input');
const listContainer = document.getElementById("list-container");

function addList() {
    if (inputBox.value === '' || deadlineInput.value === '') {
        alert("Silahkan isi list dan deadline");
    } else {
        let li = document.createElement("li");
        let span = document.createElement("span");
        li.innerHTML = inputBox.value + " - Deadline: " + deadlineInput.value;
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        let editButton = document.createElement("button");
        editButton.innerHTML = "";
        editButton.onclick = function() {
            editTask(li);
        };
        li.appendChild(editButton);

        listContainer.appendChild(li);
    }
    inputBox.value = "";
    deadlineInput.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function editTask(li) {
    let taskText = li.firstChild;
    let newText = prompt("Enter new To Do List:", taskText.nodeValue);

    if (newText !== null && newText !== "") {
        taskText.nodeValue = newText;
        saveData();
    }
}

function saveData() {
    localStorage.setItem("Data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("Data");
}

showTask();
