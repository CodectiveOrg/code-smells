// Code Smell: Long Method | After
import { TaskModel } from "../demo-purpose/models/task.model";

function appendTaskToList(task: TaskModel): void {
  const listElement = document.querySelector("#tasks")!;

  const taskElement = createTaskElement(task);

  listElement.append(taskElement);
}

function createTaskElement(task: TaskModel): HTMLLIElement {
  const taskElement = document.createElement("li");
  taskElement.innerHTML = generateTaskElementInnerHTML(task);

  addInputEventListeners(task, taskElement);

  return taskElement;
}

function generateTaskElementInnerHTML(task: TaskModel): string {
  return `
    <li>
      <label>
        <input type="checkbox" checked="${task.isDone}" />
        <div class="title">${task.title}</div>
      </label>
    </li>
  `;
}

function addInputEventListeners(
  task: TaskModel,
  taskElement: HTMLLIElement,
): void {
  const inputElement = taskElement.querySelector("input")!;

  inputElement.addEventListener("change", () => {
    task.isDone = inputElement.checked;
  });
}
