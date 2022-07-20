import { Job } from '../entities/job';
import { JobRepository } from './repositories/job-repository';

export class CreateJob {
  constructor(private readonly jobRepository: JobRepository) {}

  async execute(job: Job) {
    if (job.company.jobs.length >= 5) {
      throw new Error('jobs limit reached');
    }

    return await this.jobRepository.create(job);
  }
}
