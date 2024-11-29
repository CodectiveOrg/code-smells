// Code Smell: Large Class | Before
import { TaskModel } from "../demo-purpose/models/task.model";

class TaskManager {
  private get toastElement(): HTMLElement {
    return document.querySelector("#toast-container")!;
  }

  public async refresh(): Promise<void> {
    const tasks = await this.fetchTasks();
    if (!tasks) {
      this.renderEmpty();
      return;
    }

    const sortedTasks = this.sortById(tasks);
    this.renderList(sortedTasks);
  }

  private sortById(tasks: TaskModel[]): TaskModel[] {
    return [...tasks].sort((a, b) => a.id.localeCompare(b.id));
  }

  private async fetchTasks(): Promise<TaskModel[] | null> {
    const response = await fetch("https://api.com/tasks");

    if (!response.ok) {
      this.showError("Cannot fetch tasks.");
      return null;
    }

    return await response.json();
  }

  private showSuccess(message: string): void {
    this.toastElement.innerHTML = `Success: ${message};`;
    this.toastElement.dataset.type = "success";

    console.log(
      `%c[TOAST] ${message}`,
      "background-color: hsl(120deg, 70%, 95%); color: hsl(120deg, 70%, 10%)",
    );
  }

  private showWarning(message: string): void {
    this.toastElement.innerHTML = `Warning: ${message};`;
    this.toastElement.dataset.type = "warning";

    console.warn(`[TOAST] ${message}`);
  }

  private showError(message: string): void {
    this.toastElement.innerHTML = `Error: ${message};`;
    this.toastElement.dataset.type = "error";

    console.error(`[TOAST] ${message}`);
  }

  private renderEmpty(): void {
    // ...
  }

  private renderList(tasks: TaskModel[]): void {
    // ...
  }
}
