import { Candidate } from '../../entities/candidate';
import { CandidateRepository } from '../repositories/candidate-repository';

export class InMemoryCandidateRepository implements CandidateRepository {
  public candidates: Candidate[];

  constructor() {
    this.candidates = [];
  }

  async getById(id: string): Promise<Candidate> {
    const candidate = this.candidates.find((i) => id) as Candidate;
    if (candidate) {
      return candidate;
    } else {
      throw new Error('company not found');
    }
  }

  async create(candidate: Candidate): Promise<void> {
    this.candidates.push(candidate);
  }
}
