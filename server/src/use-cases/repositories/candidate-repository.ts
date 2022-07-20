import { Candidate } from '../../entities/candidate';

export interface CandidateRepository {
  create(candidate: Candidate): Promise<void>;
}
