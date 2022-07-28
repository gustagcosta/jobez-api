import { NextFunction, Request, Response } from 'express';
import { Company } from '../../entities/company';
import { User } from '../../entities/user';
import { CreateCompany } from '../../use-cases/create-company';
import { InMemoryCompanyRepository } from '../../use-cases/shared/in-memory-company-repository';

type CreateCompanyInput = {
  name: string;
  email: string;
  password: string;
  cnpj: string;
};

export class CreateCompanyController {
  static async execute(req: Request, res: Response, next: NextFunction) {
    const repository = new InMemoryCompanyRepository();
    const useCase = new CreateCompany(repository);

    const input = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      cnpj: req.body.cnpj,
    };

    Object.keys(input).forEach((index: string) => {
      if (!input[index as keyof CreateCompanyInput]) {
        throw new Error(
          `missing property ${index}`
        );
      }
    });

    try {
      const user = new User({
        name: input.name,
        email: input.email,
        password: input.password,
      });

      const company = new Company({
        user,
        cnpj: input.cnpj,
      });

      await useCase.execute(company);

      res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  }
}
