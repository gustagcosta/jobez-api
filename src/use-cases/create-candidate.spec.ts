import { Candidate } from '../entities/candidate';
import { User } from '../entities/user';
import { CreateCandidate } from './create-candidate';
import { InMemoryCandidateRepository } from './shared/in-memory-candidate-repository';

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
