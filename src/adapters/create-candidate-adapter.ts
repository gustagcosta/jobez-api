import { Candidate } from '../entities/candidate';
import { User } from '../entities/user';
import { CreateCandidate } from '../use-cases/create-candidate';

type Input = {
  name: string;
  email: string;
  password: string;
  cpf: string;
  date_birth: string;
};

export class CreateCandidateAdapter {
  constructor(private readonly useCase: CreateCandidate) {}

  async execute(input: Input) {
    Object.keys(input).forEach((index: string) => {
      if (!input[index as keyof Input]) {
        throw new Error('missing properties');
      }
    });

    const user = new User({
      name: input.name,
      email: input.email,
      password: input.password,
    });

    const candidate = new Candidate({
      user,
      cpf: input.cpf,
      date_birth: new Date(`${input.date_birth}:00:00`),
    });

    await this.useCase.execute(candidate);
  }
}
