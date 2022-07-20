import { ResumeRepository } from './repositories/resume-repository';

export class DeleteResume {
  constructor(private readonly resumeRepo: ResumeRepository) {}

  async execute(id: string) {
    return await this.resumeRepo.delete(id);
  }
}
