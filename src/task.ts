class Task {
  public description;
  public dueDate;
  public isCompleted = false;

  constructor(description: string, dueDate: Date) {
    this.description = description;
    this.dueDate = dueDate;
  }
}

export default Task;
