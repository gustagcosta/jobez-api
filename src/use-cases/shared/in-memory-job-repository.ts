import { Job } from "../../entities/job";
import { JobRepository } from "../repositories/job-repository";

export class InMemoryJobRepository implements JobRepository {
  public jobs: Job[];

  constructor() {
    this.jobs = [];
  }

  async getAll(): Promise<Job[]> {
    return this.jobs;
  }

  async delete(id: string): Promise<void> {
    const job = this.jobs.find((i) => i.id === id);

    if (job) {
      const index = this.jobs.indexOf(job);
      this.jobs.splice(index, 1);
    }
  }

  async create(job: Job): Promise<void> {
    this.jobs.push(job);
  }
}