import Project from "./project";

class ProjectsController {
  public projects: Array<Project> = [];

  constructor() {}

  addProject(project: Project) {
    this.projects.push(project);
  }

  removeProject(index: number) {
    this.projects.splice(index, 1);
  }

  getProjectByName(name: string) {
    this.projects.forEach((p) => {
      if (p.name === name) {
        return p;
      }
    });
  }
}

export default ProjectsController;
