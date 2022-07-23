import { NextFunction, Request, Response } from "express";
import { CreateCandidateAdapter } from "../../adapters/create-candidate-adapter";
import { CreateCandidate } from "../../use-cases/create-candidate";
import { InMemoryCandidateRepository } from "../../use-cases/shared/in-memory-candidate-repository";

export class CandidateController {
  static async post (req: Request, res: Response, next: NextFunction) {
    const repository = new InMemoryCandidateRepository();
    const useCase = new CreateCandidate(repository);
    const adapter = new CreateCandidateAdapter(useCase);

    const input = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      cpf: req.body.cpf,
      date_birth: req.body.date_birth,
    };

    try {
      await adapter.execute(input);
      res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  }
}