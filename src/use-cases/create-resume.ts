import { Resume } from '../entities/resume';
import { ResumeRepository } from './repositories/resume-repository';

export class CreateResume {
  constructor(private readonly resumeRepo: ResumeRepository) {}

  async execute(resume: Resume) {
    if (resume.candidate.resumes.length >= 3) {
      throw new Error('resumes limit reached');
    }

    return await this.resumeRepo.create(resume);
  }
}
