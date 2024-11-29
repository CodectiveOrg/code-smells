// Code Smell: Long Method | Before
import { TaskModel } from "../demo-purpose/models/task.model";

function appendTaskToList(task: TaskModel): void {
  const listElement = document.querySelector("#tasks")!;

  const taskElement = document.createElement("li");
  taskElement.innerHTML = `
    <li>
      <label>
        <input type="checkbox" checked="${task.isDone}" />
        <div class="title">${task.title}</div>
      </label>
    </li>
  `;

  const inputElement = taskElement.querySelector("input")!;
  inputElement.addEventListener("change", () => {
    task.isDone = inputElement.checked;
  });

  listElement.append(taskElement);
}
