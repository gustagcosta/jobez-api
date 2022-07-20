import { Company } from '../entities/company';
import { CompanyRepository } from './repositories/company-repository';

export class CreateCompany {
  constructor(private readonly companyRepository: CompanyRepository) {}

  async execute(company: Company) {
    return await this.companyRepository.create(company);
  }
}
