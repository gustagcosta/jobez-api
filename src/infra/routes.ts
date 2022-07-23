import { Router, Request, Response, NextFunction } from 'express';
import { CreateCandidateAdapter } from '../adapters/create-candidate-adapter';
import { CreateCandidate } from '../use-cases/create-candidate';
import { InMemoryCandidateRepository } from '../use-cases/shared/in-memory-candidate-repository';
import { CandidateController } from './controllers/candidate-controller';

const routes = Router();

routes.get('/', (req: Request, res: Response) => res.json({ ok: true }));

routes.post('/candidate', CandidateController.post);

export { routes };
