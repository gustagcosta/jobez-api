import { Resume } from '../../entities/resume';

export interface ResumeRepository {
  create(resume: Resume): Promise<void>;
}
