var taskForm = document.getElementById("addtask");
var urgentTasks = document.getElementById("urgent");
var regularTasks = document.getElementById("regular");
taskForm.addEventListener("submit", function (event) {
  event.preventDefault();
  var taskInput = document.getElementById("task");
  var descriptionInput = document.getElementById("description");
  var startDateInput = document.getElementById("startd");
  var endDateInput = document.getElementById("endd");
  var priorityInput = document.querySelector(
    'input[name="optradio"]:checked'
  ).value;

  if (
    taskInput.value !== "" &&
    startDateInput.value !== "" &&
    endDateInput.value !== ""
  ) {
    var taskRow = document.createElement("tr");
    var taskColumns =
      "<td>" +
      taskInput.value +
      "</td>" +
      "<td>" +
      descriptionInput.value +
      "</td>" +
      "<td>" +
      startDateInput.value +
      "</td>" +
      "<td>" +
      endDateInput.value +
      "</td>" +
      '<td><button class="btn btn-danger btn-sm">Remove</button></td>';

    taskRow.innerHTML = taskColumns;

    if (priorityInput === "urgent") {
      urgentTasks.appendChild(taskRow);
    } else {
      regularTasks.appendChild(taskRow);
    }

    taskInput.value = "";
    descriptionInput.value = "";
    startDateInput.value = "";
    endDateInput.value = "";
  }
});

// Remove task when remove button is clicked
document.body.addEventListener("click", function (event) {
  if (event.target.classList.contains("btn-danger")) {
    var row = event.target.closest("tr");
    row.parentNode.removeChild(row);
  }
});
