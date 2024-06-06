import Task from "./task";

class Project {
  public readonly name;
  public readonly tasks: Array<Task> = [];

  constructor(name: string) {
    this.name = name;
  }

  addTask(task: Task) {
    this.tasks.push(task);
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }

  completeTask(index: number) {
    this.tasks[index].isCompleted = true;
  }

  incompleteTask(index: number) {
    this.tasks[index].isCompleted = false;
  }
}

export default Project;
