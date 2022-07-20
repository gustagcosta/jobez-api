import { Candidate } from '../entities/candidate';
import { CandidateRepository } from './repositories/candidate-repository';

export class CreateCandidate {
  constructor(private readonly candidateRepository: CandidateRepository) {}

  async execute(candidate: Candidate) {
    return await this.candidateRepository.create(candidate);
  }
}
