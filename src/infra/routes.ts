import { Router, Request, Response } from 'express';
import { CreateCandidateController } from './controllers/create-candidate-controller';
import { CreateCompanyController } from './controllers/create-company-controller';

const routes = Router();

routes.get('/', (req: Request, res: Response) => res.json({ ok: true }));
routes.post('/candidate', CreateCandidateController.execute);
routes.post('/company', CreateCompanyController.execute);

export { routes };
