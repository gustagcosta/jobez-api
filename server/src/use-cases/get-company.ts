import { CompanyRepository } from './repositories/company-repository';

export class GetCompany {
  constructor(private readonly companyRepo: CompanyRepository) {}

  async execute(id: string) {
    return await this.companyRepo.getById(id);
  }
}
