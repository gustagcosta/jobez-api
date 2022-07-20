import { JobRepository } from './repositories/job-repository';

export class GetJobs {
  constructor(private readonly jobRepo: JobRepository) {}

  async execute(){
    return await this.jobRepo.getAll();
  }
}
