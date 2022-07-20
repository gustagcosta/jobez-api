import { Job } from '../../entities/job';

export interface JobRepository {
  getAll(): Promise<Job[]>;
  delete(id: string): Promise<void>;
  create(job: Job): Promise<void>;
}
