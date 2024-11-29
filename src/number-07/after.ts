// Code Smell: Dead Code | Before

import { TaskModel } from "../demo-purpose/models/task.model";

class Api {
  public async fetchTasks(): Promise<TaskModel[] | null> {
    const response = await fetch(`${process.env.API_BASE_URL}/tasks`);

    if (!response.ok) {
      console.error("Cannot fetch tasks.");
      return null;
    }

    return await response.json();
  }
}
