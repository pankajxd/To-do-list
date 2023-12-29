let input = document.getElementById("input-box");
let content = document.getElementById("list");

function addTask() {
    if (input.value == "") {
        alert("Input Enter karo Dost 😊")
    }
    else {
        let newTask = document.createElement("li")
        newTask.innerHTML = input.value;
        content.appendChild(newTask);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        newTask.appendChild(span);
    }
    input.value = "";
    saveData()
}

content.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData()
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData() {
    localStorage.setItem("data", content.innerHTML);
}
function showData() {
    content.innerHTML = localStorage.getItem("data");
}
showData();