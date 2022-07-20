import { Candidate } from '../entities/candidate';
import { User } from '../entities/user';
import { CreateCandidate } from './create-candidate';
import { CandidateRepository } from './repositories/candidate-repository';

class InMemoryCandidateRepository implements CandidateRepository {
  public candidates: Candidate[];

  constructor() {
    this.candidates = [];
  }

  async create(candidate: Candidate): Promise<void> {
    this.candidates.push(candidate);
  }
}

const candidate = new Candidate({
  user: new User({
    name: 'Gustavo Costa',
    email: 'gustavo@gmail.com',
    password: '12345678',
  }),
  cpf: '142.200.034-04',
  date_birth: new Date('2000, 12, 01'),
});

describe('test create candidate use case', () => {
  test('show execute a regular create candidate use case', async () => {
    const candidateRepository = new InMemoryCandidateRepository();
    const createCandidateUseCase = new CreateCandidate(candidateRepository);

    await createCandidateUseCase.execute(candidate);

    expect(candidateRepository.candidates).toHaveLength(1);
  });
});
