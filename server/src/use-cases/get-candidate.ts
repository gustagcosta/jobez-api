import { CandidateRepository } from './repositories/candidate-repository';

export class GetCandidate {
  constructor(private readonly candidateRepo: CandidateRepository) {}

  async execute(id: string) {
    return await this.candidateRepo.getById(id);
  }
}
