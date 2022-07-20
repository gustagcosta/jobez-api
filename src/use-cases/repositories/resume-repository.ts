import { Resume } from '../../entities/resume';

export interface ResumeRepository {
  delete(id: string): Promise<void>;
  create(resume: Resume): Promise<void>;
}
