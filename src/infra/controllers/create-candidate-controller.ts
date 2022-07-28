import { NextFunction, Request, Response } from 'express';
import { Candidate } from '../../entities/candidate';
import { User } from '../../entities/user';
import { CreateCandidate } from '../../use-cases/create-candidate';
import { InMemoryCandidateRepository } from '../../use-cases/shared/in-memory-candidate-repository';

type CreateCandidateInput = {
  name: string;
  email: string;
  password: string;
  cpf: string;
  date_birth: string;
};

export class CreateCandidateController {
  static async execute(req: Request, res: Response, next: NextFunction) {
    const repository = new InMemoryCandidateRepository();
    const useCase = new CreateCandidate(repository);

    const input = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      cpf: req.body.cpf,
      date_birth: req.body.date_birth,
    };

    Object.keys(input).forEach((index: string) => {
      if (!input[index as keyof CreateCandidateInput]) {
        throw new Error('missing properties');
      }
    });

    try {
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

      await useCase.execute(candidate);
      
      res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  }
}
