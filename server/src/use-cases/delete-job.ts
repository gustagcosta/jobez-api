import { JobRepository } from './repositories/job-repository';

export class DeleteJob {
  constructor(private readonly jobRepo: JobRepository) {}

  async execute(id: string) {
    return await this.jobRepo.delete(id);
  }
}
