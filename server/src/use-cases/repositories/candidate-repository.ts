import { Candidate } from '../../entities/candidate';

export interface CandidateRepository {
  getById(id: string): Promise<Candidate>;
  create(candidate: Candidate): Promise<void>;
}
