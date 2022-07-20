import { Job } from '../../entities/job';

export interface JobRepository {
  create(job: Job): Promise<void>;
}
