import { Resume } from "../../entities/resume";
import { ResumeRepository } from "../repositories/resume-repository";

export class InMemoryResumeRepository implements ResumeRepository {
  public resumes: Resume[];

  constructor() {
    this.resumes = [];
  }

  async delete(id: string): Promise<void> {
    const resume = this.resumes.find((i) => i.id === id);

    if (resume) {
      const index = this.resumes.indexOf(resume);
      this.resumes.splice(index, 1);
    }
  }

  async create(resume: Resume): Promise<void> {
    this.resumes.push(resume);
  }
}
