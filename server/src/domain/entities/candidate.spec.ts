import { User, UserProps } from './user';
import { Candidate, CandidateProps } from './candidate';

let props: CandidateProps;

beforeEach(() => {
  props = new Candidate({
    user: new User({
      name: 'Gustavo Costa',
      email: 'gustavo@gmail.com',
      password: '12345678',
    }),
    cpf: '142.200.034-04',
    date_birth: new Date('2000, 12, 01'),
  });
});

describe('test candidate entity', () => {
  test('should create a regular candidate', () => {
    const candidate = new Candidate(props);

    expect(candidate.cpf).toBe(props.cpf);
    expect(candidate.date_birth).toBe(props.date_birth);
    expect(candidate.id).toBeTruthy();
  });

  test('should throw a cpf error', () => {
    props.cpf = '777';

    expect(() => new Candidate(props)).toThrowError(new Error('invalid cpf'));
  });

  test('should throw a cpf error', () => {
    props.date_birth = new Date();

    expect(() => new Candidate(props)).toThrowError(
      new Error('invalid date birth')
    );
  });
});
